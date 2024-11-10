import os
import argparse

def rename_files_in_folder(folder_path):
    files = sorted(os.listdir(folder_path))

    for index, filename in enumerate(files, start=1):
        _, ext = os.path.splitext(filename)

        new_name = f"{index:02d}{ext}"
        
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        os.rename(old_path, new_path)
        print(f"Renamed '{filename}' to '{new_name}'")

def main():
    parser = argparse.ArgumentParser(description="Rename files in a folder with sequential numbers")
    
    parser.add_argument('-f', '--folder', required=True, help="Path to the folder containing the files to be renamed")

    args = parser.parse_args()

    rename_files_in_folder(args.folder)

if __name__ == "__main__":
    main()
