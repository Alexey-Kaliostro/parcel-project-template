(() => {
    const refs = {
        leftBtn: document.querySelector('[data-modal-left]'),
        rightBtn: document.querySelector('[data-modal-right]'),
        mainFoto:document.querySelector('data-img-change'),
        modal: document.querySelectorAll('[data-img]'),
    };
  let n=0;
    refs.leftBtn.addEventListener('click', leftClick);
    refs.rightBtn.addEventListener('click', rightClick);
  
    function leftClick() {
        n-=1;
      if(0<=n && n<refs.modal.length){
        refs.modal[n].src;
        console.log(refs.modal[n].src);
      }else{
          n=refs.modal.length-1;
          refs.modal[n].src;
        console.log(refs.modal[n].src);

      }
    }
    function rightClick() {
        n+=1;
        if(0<=n && n<refs.modal.length){
            refs.modal[n].src;
            console.log(refs.modal[n].src);
        }else{
            n=0;
            refs.modal[n].src;
        console.log(refs.modal[n].src);
        }
      }
  })();