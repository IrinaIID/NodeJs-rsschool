export function handleAllValues() {
  console.log('\x1b[36m%s\x1b[0m', `There is no value entered. Possible options:
      up
      cd path_to_directory
      ls
      cat path_to_file
      add new_file_name
      rn path_to_file new_filename
      cp path_to_file path_to_new_directory
      mv path_to_file path_to_new_directory
      rm path_to_file
      os --EOL
      os --cpus
      os --homedir
      os --username
      os --architecture
      hash path_to_file
      compress path_to_file path_to_destination
      decompress path_to_file path_to_destination`);
      console.log('More information: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md');
}