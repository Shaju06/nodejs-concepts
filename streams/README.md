# File Compression Utility

This utility is a Node.js script that reads a file, compresses it using the Gzip compression algorithm, and then writes the compressed content to a new file. The compression process is monitored and displayed using a progress indicator.

# Dependencies

1. This script uses the built-in fs module for file I/O operations.
2. The zlib module is used to create a Gzip compression transform stream.
3. The stream.Transform class is used to create a custom transform stream that displays a progress indicator.
4. The path and url modules are used to determine the current directory path of the script and construct the full file path.
