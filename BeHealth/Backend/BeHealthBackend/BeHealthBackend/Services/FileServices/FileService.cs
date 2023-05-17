using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeHealthBackend.DTOs.ImageDto;

namespace BeHealthBackend.Services.FileServices;

public class FileService : IFileService
{
    private readonly IWebHostEnvironment _webHostEnvironment;

    public FileService(IWebHostEnvironment webHostEnvironment)
    {
        _webHostEnvironment = webHostEnvironment;
    }

    public Task<bool> DeleteFile(string filename)
    {
        var path = Path.Combine(_webHostEnvironment.WebRootPath, "Images", filename);
        if (File.Exists(path))
        {
            File.Delete(path);
            return Task.FromResult(true);
        }
        return Task.FromResult(false);
    }

    public async Task<string> SaveFile(CreateImageDto file)
    {
        var wwwRootPath = _webHostEnvironment.WebRootPath;
        var name = Guid.NewGuid();
        var extension = Path.GetExtension(file.Image.FileName);
        var filename = string.Concat(name, extension);
        var path = Path.Combine(wwwRootPath, "Images", filename);

        using var fileStream = new FileStream(path, FileMode.Create);
        await file.Image.CopyToAsync(fileStream);

        return filename;
    }
}