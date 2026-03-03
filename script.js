// A data maravilhosa do match no Tinder
const startDate = new Date("2025-06-24T20:00:00").getTime();

// Função para atualizar o contador
function updateCounter() {
    const timeCounter = document.getElementById("timeCounter");
    if (!timeCounter) return;

    const now = new Date().getTime();

    const difference = Math.max(0, now - startDate);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(difference / day);
    const h = Math.floor((difference % day) / hour);
    const m = Math.floor((difference % hour) / minute);
    const s = Math.floor((difference % minute) / second);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;
}

if (document.getElementById("timeCounter")) {
    updateCounter();
    setInterval(updateCounter, 1000);
}

// Textos das histórias na página principal
const stories = {
    1: "Tudo começou no dia 24 de Junho, a noite mais fria do ano. \n Como se a coruja de Hogwarts tivesse entregue a carta no aplicativo certo, os nossos perfis cruzaram-se no Tinder. Parecia magia intervir onde os trouxas chamam de acaso. \n E assim começou a nossa jornada épica, formando a nossa própria Sociedade do Anel de duas pessoas, afinal, pra nós dois só basta a gente.",

    2: "Lembra do primeiro dia? Da expectativa imensa? E então fomos ao Galgo.\n Aquele bar foi o nosso Prancing Pony. Tivemos uma pizza quadrada absolutamente incrível e, acima de tudo, o chopp do Iron Maiden. Cá entre nós, sim, ele tem gosto de baunilha, porque afinal, tu tens sempre razão. \n Foi ali que a nossa jornada juntos realmente começou.",

    3: "Eu sempre soube. Dizem que sou louco, mas eu sinto as energias ao meu redor. \n Quando jogaram o buquê de casamento, eu não tive dúvidas, o universo já tinha conspirado a nosso favor. Aquela magia era nossa. \n Foi como se tivessem lançado a Profecia e tu, minha linda, pegou o nosso futuro em forma de flores.",

    4: "O meu Patrono seria com certeza algo que lembrasse o teu sorriso, porque pensar em ti espanta qualquer Dementador da minha vida. Tu és o meu feitiço Lumos nos dias mais escuros. \n É como dizem em Valfenda: o teu amor traz uma paz e uma força que eu antes desconhecia."
};

function showStory(id) {
    const storyText = document.getElementById("storyContent");
    const buttons = document.querySelectorAll(".story-btn");

    if (!storyText) return;

    buttons.forEach((btn, index) => {
        if (index === id - 1) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    storyText.classList.remove("fade-in");
    void storyText.offsetWidth;

    storyText.innerText = stories[id];
    storyText.classList.add("fade-in");
}

// **NOVO**: Função para abrir os Pergaminhos Todos Juntos
function toggleScroll(element) {
    // Pega todos os pergaminhos da página
    const allScrolls = document.querySelectorAll(".scroll-item");

    // Verifica se o clicado jÃ¡ está aberto ou fechado
    const isOpen = element.classList.contains("open");

    // Aplica a mesmíssima alteração a todos os pergaminhos
    allScrolls.forEach(scroll => {
        if (isOpen) {
            scroll.classList.remove("open");
        } else {
            scroll.classList.add("open");
        }
    });
}

// Criar ícones mágicos flutuantes
function createFloatingMagic() {
    const magicBg = document.querySelector('.magic-bg');
    if (!magicBg) return;

    const magic = document.createElement('div');
    magic.classList.add('floating-magic');

    const icons = ['⚡', '💍', '🪄', '🪽', '✨', '⭐', '🦉', '🗡️', '🧙‍♂️', '🧝‍♀️', '🐉', '🏰'];
    magic.innerText = icons[Math.floor(Math.random() * icons.length)];

    magic.style.left = Math.random() * 100 + 'vw';

    const size = Math.random() * 20 + 15;
    magic.style.fontSize = size + 'px';

    const duration = Math.random() * 10 + 8;
    magic.style.animationDuration = duration + 's';

    magicBg.appendChild(magic);

    setTimeout(() => {
        magic.remove();
    }, duration * 1000);
}

// Seção de ícones flutuantes
setInterval(createFloatingMagic, 1000);

// Efeito Varinha Mágica (Brilho ao mexer o mouse)
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.5) return; // Controla a quantidade de partículas
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail';
    
    const size = Math.random() * 6 + 4; // Tamanho entre 4px e 10px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    // Posição baseada no mouse
    sparkle.style.left = (e.clientX - size/2) + 'px';
    sparkle.style.top = (e.clientY + 5) + 'px'; 
    
    // Animação variada
    const tx = (Math.random() * 40 - 20) + 'px';
    const ty = (Math.random() * 40 - 10) + 'px';
    sparkle.style.setProperty('--tx', tx);
    sparkle.style.setProperty('--ty', ty);
    
    // Cores mágicas variadas
    const colors = ['#ffd700', '#ffffff', '#87cefa', '#f0e68c'];
    const randomColor = colors[Math.random() * colors.length | 0];
    sparkle.style.backgroundColor = randomColor;
    sparkle.style.boxShadow = `0 0 8px 2px ${randomColor}, 0 0 12px 4px rgba(255, 255, 255, 0.4)`;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 700);
});
