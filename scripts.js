// Seção dos pratos 
function escolherPrato1() {
    document.getElementById("frango1").style.borderColor = 'green';
    document.getElementById("frango2").style.borderColor = 'white';
    document.getElementById("frango3").style.borderColor = 'white';
  }
  
  
  
  function escolherPrato2() {
    document.getElementById("frango2").style.borderColor = 'green';
    document.getElementById("frango1").style.borderColor = 'white';
    document.getElementById("frango3").style.borderColor = 'white';
  }
  
  function escolherPrato3() {
    document.getElementById("frango3").style.borderColor = 'green';
    document.getElementById("frango2").style.borderColor = 'white';
    document.getElementById("frango1").style.borderColor = 'white';
  }
  
  // Seção das bebidas
  function escolherBebida1() {
    document.getElementById("bebida1").style.borderColor = 'green';
    document.getElementById("bebida2").style.borderColor = 'white';
    document.getElementById("bebida3").style.borderColor = 'white';
  }
  
  function escolherBebida2() {
    document.getElementById("bebida2").style.borderColor = 'green';
    document.getElementById("bebida1").style.borderColor = 'white';
    document.getElementById("bebida3").style.borderColor = 'white';
  }
  
  function escolherBebida3() {
    document.getElementById("bebida3").style.borderColor = 'green';
    document.getElementById("bebida2").style.borderColor = 'white';
    document.getElementById("bebida1").style.borderColor = 'white';
  }
  
  // Seção das sobremesas
  function escolherSobremesa1() {
    document.getElementById("sobremesa1").style.borderColor = 'green';
    document.getElementById("sobremesa2").style.borderColor = 'white';
    document.getElementById("sobremesa3").style.borderColor = 'white';
  }
  
  function escolherSobremesa2() {
    document.getElementById("sobremesa2").style.borderColor = 'green';
    document.getElementById("sobremesa1").style.borderColor = 'white';
    document.getElementById("sobremesa3").style.borderColor = 'white';
  }
  
  function escolherSobremesa3() {
    document.getElementById("sobremesa3").style.borderColor = 'green';
    document.getElementById("sobremesa2").style.borderColor = 'white';
    document.getElementById("sobremesa1").style.borderColor = 'white';
  }
  
  // Botão de finalizar
  function finalizar(){
    let mensagem;
  
    mensagem = 'Olá, gostaria de pedir um Frango Ying Yang, uma Coquinha Gelada e um Pudim.' 
    window.open("https://wa.me///+5521985712371?text=" + mensagem);
  }
  