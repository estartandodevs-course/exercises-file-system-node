const path = require("path");

const {
  getDirectoryDataPath,
  createFile,
  renameFile,
  deleteFile,
} = require("../../src/services/fileSystemService");

jest.mock("fs");

describe("File System Service", () => {
  it("should return the path ./data where the files are saved", () => {
    const directoryPath = getDirectoryDataPath();
    expect(directoryPath).toBe(path.join(__dirname, "../../src/data"));
  });

  it("should create a file with the name test-file.txt and test data as content", async () => {
    const result = await createFile("test data", "test-file.txt");
    expect(result).toEqual("test-file.txt written");
  });

  it("should be able to remove a file from the data path", async () => {
    const result = await renameFile("test-file.txt", "test-file-NEW.txt");
    expect(result).toEqual("test-file.txt renamed to test-file-NEW.txt");
  });

  it("should be able to remove a file from the data path", async () => {
    const result = await deleteFile("test-file.txt");
    expect(result).toEqual("test-file.txt deleted successfully");
  });
});
