export default function(refName, event) {
  const copyControl = this.refs[refName];

  if (copyControl && copyControl.select) {
    copyControl.focus();
    copyControl.select();
    try {
      document.execCommand('copy');
      copyControl.blur();
    }
    catch (err) {
      console.log(err);
    }
  }
}
