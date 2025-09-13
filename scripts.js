document.addEventListener('DOMContentLoaded', () => {

    // --- CARROSSEL DE DEPOIMENTOS ---
    const testimonials = [
        {
            photo: 'assets/img/cliente-1.jpg',
            name: 'Ana Silva',
            text: '"As roupas são maravilhosas, de altíssima qualidade e o atendimento é impecável. Amei minha compra!"'
        },
        {
            photo: 'assets/img/cliente-2.jpg',
            name: 'Maria Oliveira',
            text: '"Encontrei o vestido perfeito para uma ocasião especial. A entrega foi super rápida. Recomendo!"'
        },
        {
            photo: 'assets/img/cliente-3.jpg', // Adicione uma terceira imagem se tiver
            name: 'Juliana Costa',
            text: '"Peças únicas e cheias de estilo. A Boutique Lume se tornou minha loja preferida para todas as ocasiões."'
        }
    ];

    const photoEl = document.getElementById('testimonial-photo');
    const textEl = document.getElementById('testimonial-text');
    const nameEl = document.getElementById('testimonial-name');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showTestimonial(index) {
        const testimonial = testimonials[index];
        photoEl.src = testimonial.photo;
        textEl.innerText = testimonial.text;
        nameEl.innerText = testimonial.name;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);

    // --- MÁSCARA DE FORMATAÇÃO DO CAMPO DE TELEFONE ---

const phoneInput = document.getElementById('telefone');

phoneInput.addEventListener('input', (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, '');

    value = value.substring(0, 11);

    let formattedValue = value;
    if (value.length > 2) {
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 7) {
        // Formato (XX) XXXXX-XXXX
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
    }

    event.target.value = formattedValue;
});

    // --- VALIDAÇÃO DO FORMULÁRIO ---
    
    const form = document.querySelector('.order-form');

    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const roupa = document.getElementById('roupa').value;
        const pagamento = document.querySelector('input[name="pagamento"]:checked');

        const telefoneRegex = /^\d{10,11}$/;
        if (!telefoneRegex.test(telefone)) {
            alert('Por favor, insira um número de telefone válido (apenas números, com DDD).');
            return;
        }

        if (nome === '' || endereco === '') {
            alert('Por favor, preencha todos os campos obrigatórios (Nome e Endereço).');
            return;
        }

        if (roupa === '') {
            alert('Por favor, escolha um modelo de roupa.');
            return;
        }

        if (!pagamento) {
            alert('Por favor, escolha uma forma de pagamento.');
            return;
        }
        
        // Se todas as validações passarem
        console.log('Formulário válido! Redirecionando...');
        
        // Redireciona para a página de obrigado
        window.location.href = 'obrigado.html';
    });
});