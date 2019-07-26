let translateButton = document.getElementById('button');

if (translateButton) {
  translateButton.onclick = () => {
    window.open(
      '',
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400'
    );
  };
}
