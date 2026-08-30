$code = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Media.Ocr;
using Windows.Storage;
using Windows.Graphics.Imaging;

public class OcrHelper {
    public static async Task<string> Recognize(string filePath) {
        var file = await StorageFile.GetFileFromPathAsync(filePath);
        using (var stream = await file.OpenAsync(FileAccessMode.Read)) {
            var decoder = await BitmapDecoder.CreateAsync(stream);
            using (var bitmap = await decoder.GetSoftwareBitmapAsync()) {
                var engine = OcrEngine.TryCreateFromLanguage(new Windows.Globalization.Language("en-US"));
                var result = await engine.RecognizeAsync(bitmap);
                return result.Text;
            }
        }
    }
}
"@

Add-Type -TypeDefinition $code -Language CSharp -ReferencedAssemblies "System.Runtime.WindowsRuntime"
$output = ""
for ($i = 1; $i -le 40; $i++) {
    $item = Get-Item "pdf_pages_g5/page_$i.png" -ErrorAction SilentlyContinue
    if ($item) {
        try {
            $t = [OcrHelper]::Recognize($item.FullName).Result
            if ($t.Trim().Length -gt 0) {
                $outStr = "=== Page $i ===`n$t`n`n"
                $output += $outStr
                Write-Host $outStr
            }
        } catch {
            Write-Host "Page $i error: $_"
        }
    }
}
Set-Content -Path "g5_ocr_results.txt" -Value $output -Encoding UTF8
