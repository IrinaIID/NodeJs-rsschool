function handleUserName() {
  let userName;
  const args = process.argv.slice(2);
  args.forEach(arg => {
    if ( arg.includes('--username=') ) {
      userName = arg.replace('--username=', '');
    } else {
      console.log('Please start app with correct typing user name, format  -- --username=your_username');
      process.exit();
    }
  });

  return userName;
}

export { handleUserName }