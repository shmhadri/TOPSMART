[Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new("en-US"))

for ($i = 1; $i -le 35; $i++) {
    $item = Get-Item "pdf_pages_g5/page_$i.png" -ErrorAction SilentlyContinue
    if (-not $item) { continue }
    $path = $item.FullName
    
    $fileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
    while ($fileTask.Status -eq 'Started') { Start-Sleep -Milliseconds 10 }
    $file = $fileTask.GetResults()
    
    $streamTask = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    while ($streamTask.Status -eq 'Started') { Start-Sleep -Milliseconds 10 }
    $stream = $streamTask.GetResults()
    
    $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    while ($decoderTask.Status -eq 'Started') { Start-Sleep -Milliseconds 10 }
    $decoder = $decoderTask.GetResults()
    
    $bmpTask = $decoder.GetSoftwareBitmapAsync()
    while ($bmpTask.Status -eq 'Started') { Start-Sleep -Milliseconds 10 }
    $bmp = $bmpTask.GetResults()
    
    $ocrTask = $engine.RecognizeAsync($bmp)
    while ($ocrTask.Status -eq 'Started') { Start-Sleep -Milliseconds 10 }
    $res = $ocrTask.GetResults()
    
    Write-Host "=== Page $i ==="
    Write-Host $res.Text
}
