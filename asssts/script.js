
const profiles = [
    {
        name: "fwlta",
        image: "assets/profiles/perfil.webp",
        links: [
           { icon: "fab fa-telegram", url: "https://t.me/trwste", label: "Telegram" }
        ]
    }
];

function renderProfiles() {
    const container = document.getElementById('profilesContainer');
    container.innerHTML = '';

    profiles.forEach(profile => {
        const div = document.createElement('div');
        div.className = 'profile';
        div.innerHTML = `
            <img
                src="${profile.image}"
                alt="${profile.name}"
                class="avatar"
                width="110"
                height="110"
                style="width:110px;height:110px;border-radius:50%;object-fit:cover;pointer-events:none;"
            />
            <h1 class="username">${profile.name}</h1>
            <div class="icons">
                ${profile.links.map(l => `
                    <a href="${l.url}" target="_blank" aria-label="${l.label}">
                        <i class="${l.icon}"></i>
                    </a>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

function entrar() {
    document.getElementById('loader').classList.add('active');

    setTimeout(function () {
        document.getElementById('confirmacao').style.display = 'none';
        document.getElementById('site').style.display = 'flex';
        document.getElementById('loader').classList.remove('active');
        renderProfiles();

        const audio = document.getElementById('audio');
        if (audio) audio.play().catch(() => {});
    }, 800);
}

document.addEventListener('keydown', function (e) {
    const blocked = [123];
    const blockedCS = [73, 74, 85];
    if (
        blocked.includes(e.keyCode) ||
        (e.ctrlKey && e.shiftKey && blockedCS.includes(e.keyCode)) ||
        (e.ctrlKey && e.keyCode === 85)
    ) {
        e.preventDefault();
    }
});

