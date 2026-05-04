const WA_PHONE = "5521987911068"; 
const imgDefault = "https://cdn-icons-png.flaticon.com/512/3028/3028549.png";

const database = [
    { id: 1, cat: 'Remédios', nome: 'Dipirona Sódica 500mg', price: 8.90, img: imgDefault },
    { id: 2, cat: 'Remédios', nome: 'Dorflex 36 Comprimidos', price: 19.90, img: imgDefault },
    { id: 3, cat: 'Remédios', nome: 'Paracetamol 750mg', price: 11.50, img: imgDefault },
    { id: 4, cat: 'Remédios', nome: 'Ibuprofeno 600mg', price: 14.90, img: imgDefault },
    { id: 5, cat: 'Remédios', nome: 'Antigripal MultiSint', price: 12.00, img: imgDefault },
    { id: 6, cat: 'Remédios', nome: 'Xarope Vick 120ml', price: 26.00, img: imgDefault },
    { id: 7, cat: 'Remédios', nome: 'Aspirina 500mg 10un', price: 9.00, img: imgDefault },
    { id: 8, cat: 'Cosméticos', nome: 'Protetor Solar FPS 60', price: 59.90, img: imgDefault },
    { id: 9, cat: 'Cosméticos', nome: 'Hidratante Neutrogena', price: 39.00, img: imgDefault },
    { id: 10, cat: 'Cosméticos', nome: 'Sérum Vitamina C 30ml', price: 79.90, img: imgDefault },
    { id: 11, cat: 'Cosméticos', nome: 'Água Micelar 200ml', price: 22.00, img: imgDefault },
    { id: 12, cat: 'Cosméticos', nome: 'Gel de Limpeza Facial', price: 34.00, img: imgDefault },
    { id: 13, cat: 'Cosméticos', nome: 'Shampoo Antiqueda', price: 42.00, img: imgDefault },
    { id: 14, cat: 'Cosméticos', nome: 'Creme Antirrugas Noite', price: 88.00, img: imgDefault },
    { id: 15, cat: 'Higiene', nome: 'Sabonete Líquido Protex', price: 12.90, img: imgDefault },
    { id: 16, cat: 'Higiene', nome: 'Creme Dental Pack 3un', price: 13.50, img: imgDefault },
    { id: 17, cat: 'Higiene', nome: 'Desodorante Rexona Pack', price: 24.00, img: imgDefault },
    { id: 18, cat: 'Higiene', nome: 'Fio Dental 50m 2un', price: 9.90, img: imgDefault },
    { id: 19, cat: 'Higiene', nome: 'Enxaguante Bucal 500ml', price: 18.00, img: imgDefault },
    { id: 20, cat: 'Higiene', nome: 'Papel Higiênico 12un', price: 17.50, img: imgDefault },
    { id: 21, cat: 'Higiene', nome: 'Escova de Dente Macia', price: 8.00, img: imgDefault },
    { id: 22, cat: 'Vitaminas', nome: 'Vitamina C Efervescente', price: 18.00, img: imgDefault },
    { id: 23, cat: 'Vitaminas', nome: 'Multivitamínico A-Z', price: 49.90, img: imgDefault },
    { id: 24, cat: 'Vitaminas', nome: 'Ômega 3 1000mg', price: 65.00, img: imgDefault },
    { id: 25, cat: 'Vitaminas', nome: 'Colágeno Hidrolisado', price: 82.00, img: imgDefault },
    { id: 26, cat: 'Vitaminas', nome: 'Magnésio Dimalato', price: 38.00, img: imgDefault },
    { id: 27, cat: 'Vitaminas', nome: 'Vitamina D 2000UI', price: 29.00, img: imgDefault },
    { id: 28, cat: 'Vitaminas', nome: 'Biotina Cabelos e Unhas', price: 44.00, img: imgDefault }
];

let cart = [];
let modalQtyCount = 0;

function init() {
    const shop = document.getElementById('shop');
    const categories = [...new Set(database.map(p => p.cat))];
    let html = "";

    categories.forEach((cat) => {
        const products = database.filter(p => p.cat === cat);
        html += `
            <div class="category-section">
                <h2 class="category-title">${cat}</h2>
                <div class="product-row">
                    ${products.map(p => `
                        <div class="product-card" data-name="${p.nome.toLowerCase()}" onclick="openProductModal(${p.id})">
                            <div class="img-placeholder"><img src="${p.img}"></div>
                            <p class="prod-name">${p.nome}</p>
                            <span class="price-now">R$ ${p.price.toFixed(2).replace('.',',')}</span>
                            <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id}, this)">ADICIONAR +</button>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
    shop.innerHTML = html;

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

function openProductModal(id) {
    const p = database.find(x => x.id === id);
    modalQtyCount = 0;
    document.getElementById('modal-p-nome').innerText = p.nome;
    document.getElementById('modal-p-price').innerText = `R$ ${p.price.toFixed(2).replace('.',',')}`;
    document.getElementById('modal-p-img').innerHTML = `<img src="${p.img}">`;
    document.getElementById('modal-p-desc').innerText = `O produto ${p.nome} é selecionado pela FarmaPRO para garantir o melhor cuidado e eficácia no seu uso diário. Qualidade 100% garantida para sua saúde.`;
    document.getElementById('modal-qty').innerText = modalQtyCount;
    
    document.getElementById('modal-add-btn').onclick = () => {
        if(modalQtyCount > 0) {
            for(let i=0; i < modalQtyCount; i++) addToCart(p.id);
            closeProductModal();
        } else {
            alert("Selecione a quantidade!");
        }
    };
    document.getElementById('product-modal').style.display = 'flex';
}

function closeProductModal() { document.getElementById('product-modal').style.display = 'none'; }
function changeModalQty(val) { modalQtyCount += val; if(modalQtyCount < 0) modalQtyCount = 0; document.getElementById('modal-qty').innerText = modalQtyCount; }

// Alteração na lógica: agora cada item ganha um UID (ID Único) para ser removido individualmente
function addToCart(id, btn) {
    const item = database.find(p => p.id === id);
    
    // Criamos uma cópia do item com um identificador único baseado no tempo (timestamp)
    // Isso garante que cada "clique" seja um objeto diferente no carrinho
    const itemIndividual = {
        ...item,
        cartId: Date.now() + Math.random() // ID único para esta linha específica
    };
    
    cart.push(itemIndividual);

    if(btn) {
        btn.innerText = "ADICIONADO";
        btn.style.background = "#2ecc71";
        setTimeout(() => { 
            btn.innerText = "ADICIONAR +"; 
            btn.style.background = "var(--primary)"; 
        }, 800);
    }
    updateUI();
}

function updateUI() {
    const totalCount = cart.length; // Conta cada item individualmente
    const totalPrice = cart.reduce((a, b) => a + b.price, 0);
    
    document.getElementById('cart-count').innerText = totalCount;
    document.getElementById('total-price').innerText = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    
    // Agora renderizamos cada item do array como uma linha única
    document.getElementById('cart-items').innerHTML = cart.map(i => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; border-bottom: 1px solid #eee;">
            <div style="text-align: left;">
                <strong style="font-size: 14px; color: #333;">${i.nome}</strong><br>
                <small style="color: #666;">1 unidade - R$ ${i.price.toFixed(2).replace('.',',')}</small>
            </div>
            <button onclick="remove(${i.cartId})" style="background: #fff0f0; border: 1px solid #ffcccc; color: #E53E3E; padding: 5px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 700;">
                Remover
            </button>
        </div>
    `).join('');
}

// Remove apenas o item que possui aquele cartId específico
function remove(cartId) { 
    cart = cart.filter(i => i.cartId !== cartId); 
    updateUI(); 
}

function openCart() { document.getElementById('cart-modal').style.display = 'flex'; }
function closeCart() { document.getElementById('cart-modal').style.display = 'none'; }
function toggleTroco() { document.getElementById('troco-pergunta').style.display = (document.getElementById('pagamento').value === 'Dinheiro') ? 'block' : 'none'; }
function handleTrocoVisibility() {
    const choice = document.querySelector('input[name="troco_op"]:checked')?.value;
    document.getElementById('troco-container').style.display = (choice === 'sim') ? 'block' : 'none';
}

function sendWhatsApp() {
    const nome = document.getElementById('nome').value;
    const end = document.getElementById('endereco').value;
    if (!nome || !end || cart.length === 0) return alert("Preencha os dados!");

    let text = `*PEDIDO FARMAPRO*%0A%0A*Cliente:* ${nome}%0A*Endereço:* ${end}%0A%0A*ITENS:*%0A`;

    // Agrupa os itens repetidos apenas para o texto do WhatsApp
    const resumo = {};
    cart.forEach(item => {
        resumo[item.nome] = (resumo[item.nome] || 0) + 1;
    });

    for (const [prod, qtd] of Object.entries(resumo)) {
        text += `- ${qtd}x ${prod}%0A`;
    }

    text += `%0A*TOTAL: ${document.getElementById('total-price').innerText}*`;
    window.open(`https://wa.me/${WA_PHONE}?text=${text}`);
}

document.addEventListener('DOMContentLoaded', init);