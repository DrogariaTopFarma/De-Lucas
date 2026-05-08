const WA_PHONE = "5521987911068"; 
const imgDefault = "https://cdn-icons-png.flaticon.com/512/3028/3028549.png";

const database = [
    { id: 1, cat: 'Remédios', nome: 'Dipirona Sódica 500mg', price: 8.90, img: imgDefault, desc: 'Analgésico e antitérmico potente para alívio rápido de dores e febre.' },
    { id: 2, cat: 'Remédios', nome: 'Dorflex 36 Comprimidos', price: 19.90, img: imgDefault, desc: 'Ideal para o relaxamento muscular e alívio de dores tensionais.' },
    { id: 3, cat: 'Remédios', nome: 'Paracetamol 750mg', price: 11.50, img: imgDefault, desc: 'Eficaz contra febre e dores leves, com segurança para o uso adulto.' },
    { id: 4, cat: 'Remédios', nome: 'Ibuprofeno 600mg', price: 14.90, img: imgDefault, desc: 'Anti-inflamatório indicado para dores de garganta e articulações.' },
    { id: 5, cat: 'Remédios', nome: 'Antigripal MultiSint', price: 12.00, img: imgDefault, desc: 'Alívio completo dos sintomas da gripe e resfriados.' },
    { id: 6, cat: 'Remédios', nome: 'Xarope Vick 120ml', price: 26.00, img: imgDefault, desc: 'Auxilia na expectoração e acalma a tosse produtiva.' },
    { id: 7, cat: 'Remédios', nome: 'Aspirina 500mg 10un', price: 9.00, img: imgDefault, desc: 'Tradicional analgésico para dores de cabeça e inflamações.' },
    { id: 8, cat: 'Cosméticos', nome: 'Protetor Solar FPS 60', price: 59.90, img: imgDefault, desc: 'Proteção facial e corporal com toque seco e alta resistência.' },
    { id: 9, cat: 'Cosméticos', nome: 'Hidratante Neutrogena', price: 39.00, img: imgDefault, desc: 'Hidratação profunda para peles secas e sensíveis.' },
    { id: 10, cat: 'Cosméticos', nome: 'Sérum Vitamina C 30ml', price: 79.90, img: imgDefault, desc: 'Poderoso antioxidante que ilumina e rejuvenesce a pele.' },
    { id: 11, cat: 'Cosméticos', nome: 'Água Micelar 200ml', price: 22.00, img: imgDefault, desc: 'Limpa, demaquila e purifica a pele sem ressecar.' },
    { id: 12, cat: 'Cosméticos', nome: 'Gel de Limpeza Facial', price: 34.00, img: imgDefault, desc: 'Remove a oleosidade e as impurezas sem agredir o rosto.' },
    { id: 13, cat: 'Cosméticos', nome: 'Shampoo Antiqueda', price: 42.00, img: imgDefault, desc: 'Fortalece a fibra capilar e auxilia na redução da queda.' },
    { id: 14, cat: 'Cosméticos', nome: 'Creme Antirrugas Noite', price: 88.00, img: imgDefault, desc: 'Tratamento noturno para suavizar linhas de expressão.' },
    { id: 15, cat: 'Mamãe e Bebê', nome: 'Babysec hiper/Mega', price: 12.90, img: imgDefault, desc: 'Proteção antibacteriana profunda para as mãos e corpo.' },
    { id: 16, cat: 'Mamãe e Bebê', nome: 'Personal hiper/Mega', price: 13.50, img: imgDefault, desc: 'Pack econômico para dentes brancos e hálito fresco.' },
    { id: 17, cat: 'Mamãe e Bebê', nome: 'Geriatex Fralda e abs', price: 24.00, img: imgDefault, desc: 'Proteção garantida por 48 horas contra o suor.' },
    { id: 18, cat: 'Mamãe e Bebê', nome: 'Sabonete Liquido', price: 9.90, img: imgDefault, desc: 'Essencial para a limpeza onde a escova não alcança.' },
    { id: 19, cat: 'Mamãe e Bebê', nome: 'Enxaguante Bucal 500ml', price: 18.00, img: imgDefault, desc: 'Higiene completa que mata até 99% dos germes.' },
    { id: 20, cat: 'Mamãe e Bebê', nome: 'Papel Higiênico 12un', price: 17.50, img: imgDefault, desc: 'Papel folha dupla com máxima suavidade e absorção.' },
    { id: 21, cat: 'Mamãe e Bebê', nome: 'Escova de Dente Macia', price: 8.00, img: imgDefault, desc: 'Cerdas macias para limpeza gentil das gengivas.' },
    { id: 22, cat: 'Vitaminas', nome: 'Vitamina C Efervescente', price: 18.00, img: imgDefault, desc: 'Reforço para a imunidade com rápida absorção.' },
    { id: 23, cat: 'Vitaminas', nome: 'Multivitamínico A-Z', price: 49.90, img: imgDefault, desc: 'Energia e nutrição completa com vitaminas de A a Z.' },
    { id: 24, cat: 'Vitaminas', nome: 'Ômega 3 1000mg', price: 65.00, img: imgDefault, desc: 'Auxilia na saúde cardiovascular e funções cerebrais.' },
    { id: 25, cat: 'Vitaminas', nome: 'Colágeno Hidrolisado', price: 82.00, img: imgDefault, desc: 'Proteína essencial para firmeza da pele e articulações.' },
    { id: 26, cat: 'Vitaminas', nome: 'Magnésio Dimalato', price: 38.00, img: imgDefault, desc: 'Ajuda no funcionamento muscular e relaxamento do corpo.' },
    { id: 27, cat: 'Vitaminas', nome: 'Vitamina D 2000UI', price: 29.00, img: imgDefault, desc: 'Fundamental para a absorção de cálcio e saúde óssea.' },
    { id: 28, cat: 'Vitaminas', nome: 'Biotina Cabelos e Unhas', price: 44.00, img: imgDefault, desc: 'Estimula o fortalecimento capilar e das unhas.' }
];

let cart = [];
let modalQtyCount = 0;
let currentCategory = ""; 

function init() {
    const shop = document.getElementById('shop');
    if (shop) shop.innerHTML = ""; 

    const trocoInput = document.getElementById('valor-troco');
    if(trocoInput) {
        trocoInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, "");
            if (value === "") { e.target.value = ""; return; }
            value = (value / 100).toFixed(2).replace(".", ",");
            e.target.value = "R$ " + value;
        });
    }
}

// REDESENHA A VITRINE PARA ATUALIZAR OS BOTÕES +/-
function refreshProductList() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm !== "") {
        filterProducts(); 
    } else if (currentCategory !== "") {
        filterByCategory(currentCategory); 
    } else if (document.getElementById('shop').innerHTML !== "") {
        // Se estiver na visão de "Todos os Produtos"
        renderProducts(database, "Todos os Produtos");
    }
}

function filterByCategory(categoryName) {
    currentCategory = categoryName;
    const shop = document.getElementById('shop');
    const sobre = document.getElementById('sobre-nos');
    if (sobre) sobre.style.display = 'none';

    const products = database.filter(p => p.cat.toLowerCase() === categoryName.toLowerCase());
    renderProducts(products, categoryName);
    window.scrollTo({ top: shop.offsetTop - 100, behavior: 'smooth' });
}

window.filterProducts = function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sobre = document.getElementById('sobre-nos');
    const shop = document.getElementById('shop');

    if (searchTerm !== "") {
        if (sobre) sobre.style.display = 'none';
    } else {
        if (currentCategory === "" && sobre) sobre.style.display = 'block';
    }
    
    if (searchTerm === "") {
        if (currentCategory) { filterByCategory(currentCategory); } 
        else { shop.innerHTML = ""; }
        return;
    }

    let results = currentCategory === "" 
        ? database.filter(p => p.nome.toLowerCase().includes(searchTerm))
        : database.filter(p => p.cat.toLowerCase() === currentCategory.toLowerCase() && p.nome.toLowerCase().includes(searchTerm));

    if (results.length > 0) {
        renderProducts(results, currentCategory ? `Em ${currentCategory}` : "Resultados");
    } else {
        const msg = encodeURIComponent(`Olá! Não encontrei "${searchTerm}" no site. Tem disponível?`);
        shop.innerHTML = `
            <div style="text-align:center; padding:40px;">
                <p>Não temos promoção para este item.</p>
                <a href="https://wa.me/${WA_PHONE}?text=${msg}" target="_blank" style="background:#25D366; color:white; padding:12px 25px; border-radius:30px; text-decoration:none; display:inline-block; margin-top:15px; font-weight:bold;">Perguntar no WhatsApp <i class="fa-brands fa-whatsapp"></i></a>
            </div>`;
    }
};

function renderProducts(products, title) {
    const shop = document.getElementById('shop');
    const headerHtml = title ? `<h2 class="category-title">${title}</h2>` : "";

    shop.innerHTML = `
        <div class="category-section">
            ${headerHtml}
            <div class="product-row">
                ${products.map(p => `
                    <div class="product-card" onclick="openProductModal(${p.id})">
                        <div class="img-placeholder"><img src="${p.img}"></div>
                        <p class="prod-name">${p.nome}</p>
                        <span class="price-now">R$ ${p.price.toFixed(2).replace('.',',')}</span>
                        <div id="cart-ctrl-${p.id}">
                            ${getCartControlHTML(p.id)}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
}

function getCartControlHTML(productId) {
    const quantity = cart.filter(item => item.id === productId).length;
    if (quantity > 0) {
        return `
            <div class="quantity-control-card">
                <button class="qty-btn-card" onclick="event.stopPropagation(); removeFromCart(${productId})">-</button>
                <span class="qty-num-card">${quantity}</span>
                <button class="qty-btn-card" onclick="event.stopPropagation(); addToCart(${productId})">+</button>
            </div>`;
    } else {
        return `<button class="btn-add" onclick="event.stopPropagation(); addToCart(${productId})">ADICIONAR +</button>`;
    }
}

function addToCart(id) {
    const item = database.find(p => p.id === id);
    
    // Adiciona 1 item ao array
    cart.push({ ...item, cartId: Date.now() + Math.random() });
    
    updateUI();            // Atualiza balãozinho e modal do carrinho
    refreshProductList();  // Atualiza o contador de fora (+ 1 -)
    openCart();            // Abre o carrinho como você pediu
}
function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateUI();
    refreshProductList();
}

function updateUI() {
    const total = cart.reduce((a, b) => a + b.price, 0);
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
        cartCountElement.style.display = cart.length > 0 ? 'flex' : 'none';
    }

    const totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; padding:20px; color:#718096;">Seu carrinho está vazio.</p>';
        } else {
            // RENDERIZAÇÃO INDIVIDUAL: Cada item do array vira uma linha
            cartItemsContainer.innerHTML = cart.map(i => `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #eee;">
                    <div style="display:flex; align-items:center; gap: 10px;">
                        <img src="${i.img}" style="width:40px; height:40px; object-fit:contain;">
                        <div>
                            <strong style="font-size:14px;">${i.nome}</strong><br>
                            <small style="color:var(--primary); font-weight:bold;">R$ ${i.price.toFixed(2).replace('.',',')}</small>
                        </div>
                    </div>
                    <button onclick="removeIndividual(${i.cartId})" style="color:#ff4d4d; border:none; background:none; font-size:18px; cursor:pointer;">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>`).join('');
        }
    }
}

function removeTodosDoId(id) {
    cart = cart.filter(i => i.id !== id);
    updateUI();
    refreshProductList();
}

// Funções de Modal e UI permanecem
function openProductModal(id) {
    const p = database.find(x => x.id === id);

    document.getElementById('modal-p-nome').innerText = p.nome;
    document.getElementById('modal-p-price').innerText = `R$ ${p.price.toFixed(2).replace('.',',')}`;
    document.getElementById('modal-p-desc').innerText = p.desc;
    document.getElementById('modal-p-img').innerHTML = `<img src="${p.img}" style="max-width:100%; height:auto;">`;

    // CONFIGURAÇÃO DO BOTÃO DE ADICIONAR DENTRO DO MODAL
    const btnAddModal = document.getElementById('modal-add-btn');
    btnAddModal.innerText = "ADICIONAR AO PEDIDO"; // Texto padrão
    
    btnAddModal.onclick = () => {
        addToCart(id);      // Chama a função que já temos para adicionar
        closeProductModal(); // Fecha o modal após adicionar
    };
    
    document.getElementById('product-modal').style.display = 'flex';
}

function closeProductModal() { document.getElementById('product-modal').style.display = 'none'; }
function changeModalQty(val) { 
    modalQtyCount += val; 
    
    // Impede que a quantidade seja menor que 1 no modal
    if(modalQtyCount < 1) modalQtyCount = 1; 
    
    document.getElementById('modal-qty').innerText = modalQtyCount; 
}

function openCart() { document.getElementById('cart-modal').style.display = 'flex'; }
function closeCart() { document.getElementById('cart-modal').style.display = 'none'; }
function showAll() {
    currentCategory = "";
    const sobre = document.getElementById('sobre-nos');
    if (sobre) sobre.style.display = 'block';
    document.getElementById('shop').innerHTML = ""; 
    document.getElementById('searchInput').value = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAllProducts() {
    currentCategory = "";
    const shop = document.getElementById('shop');
    const sobre = document.getElementById('sobre-nos');
    if (sobre) sobre.style.display = 'none';
    document.getElementById('searchInput').value = "";
    renderProducts(database, "Todos os Produtos");
    window.scrollTo({ top: shop.offsetTop - 100, behavior: 'smooth' });
}

function toggleTroco() { 
    document.getElementById('troco-pergunta').style.display = (document.getElementById('pagamento').value === 'Dinheiro') ? 'block' : 'none'; 
}

function handleTrocoVisibility() {
    const choice = document.querySelector('input[name="troco_op"]:checked')?.value;
    document.getElementById('troco-container').style.display = (choice === 'sim') ? 'block' : 'none';
}

function sendWhatsApp() {
   
    // 1. Pegar os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const end = document.getElementById('endereco').value.trim(); // ID correto é 'endereco'
    const num = document.getElementById('numero_end').value.trim();
    const ref = document.getElementById('referencia_end').value.trim();
    const pag = document.getElementById('pagamento').value;
    
    // 2. Validação: Verifica se os campos obrigatórios estão vazios
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    if (nome === "" || end === "" || num === "" || ref === "") {
        alert("⚠️ Por favor, preencha Nome, Endereço, Número e Referência.");
        return;
    }

    // 3. Lógica do Troco (Verifica se escolheu Dinheiro e se precisa de troco)
    let trocoTexto = "";
    if (pag === "Dinheiro") {
        const trocoOp = document.querySelector('input[name="troco_op"]:checked')?.value;
        const valorTroco = document.getElementById('valor-troco').value.trim();
        
        if (trocoOp === "sim") {
            if (valorTroco === "") {
                alert("⚠️ Por favor, informe o valor para o troco.");
                return;
            }
            trocoTexto = `%0A*Troco para:* ${valorTroco}`;
        }
    }
    // Cabeçalho da mensagem
    let text = `*PEDIDO TOP FARMA*%0A`;
    text += `*Cliente:* ${nome}%0A`;
    text += `*Endereço:* ${end}, Nº ${num}%0A`;
    
    // Adiciona referência se estiver preenchida
    if (ref !== "") {
        text += `*Referência:* ${ref}%0A`;
    }
    
    text += `%0A*ITENS DO PEDIDO:*%0A`;

    // Lista os itens um por um (como você pediu antes)
    cart.forEach(i => {
        text += `- ${i.nome} (R$ ${i.price.toFixed(2).replace('.',',')})%0A`;
    });

    text += `%0A*TOTAL: ${document.getElementById('total-price').innerText}*%0A`;
    text += `*FORMA DE PAGAMENTO:* ${pag}%0A`;

    // Lógica do troco
    if (pag === "Dinheiro") {
        const trocoOp = document.querySelector('input[name="troco_op"]:checked')?.value;
        if (trocoOp === "sim") {
            const valorTroco = document.getElementById('valor-troco').value;
            text += `*Troco para:* ${valorTroco}%0A`;
        }
    }

    // Abre o WhatsApp com a mensagem formatada
    window.open(`https://wa.me/${WA_PHONE}?text=${text}`);
}

function removeIndividual(cartId) {
    // Filtra o carrinho mantendo todos os itens, exceto o que tem esse cartId específico
    cart = cart.filter(item => item.cartId !== cartId);
    
    updateUI();
    refreshProductList();
}
document.addEventListener('DOMContentLoaded', init);