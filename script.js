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
    { id: 15, cat: 'Higiene', nome: 'Sabonete Líquido Protex', price: 12.90, img: imgDefault, desc: 'Proteção antibacteriana profunda para as mãos e corpo.' },
    { id: 16, cat: 'Higiene', nome: 'Creme Dental Pack 3un', price: 13.50, img: imgDefault, desc: 'Pack econômico para dentes brancos e hálito fresco.' },
    { id: 17, cat: 'Higiene', nome: 'Desodorante Rexona Pack', price: 24.00, img: imgDefault, desc: 'Proteção garantida por 48 horas contra o suor.' },
    { id: 18, cat: 'Higiene', nome: 'Fio Dental 50m 2un', price: 9.90, img: imgDefault, desc: 'Essencial para a limpeza onde a escova não alcança.' },
    { id: 19, cat: 'Higiene', nome: 'Enxaguante Bucal 500ml', price: 18.00, img: imgDefault, desc: 'Higiene completa que mata até 99% dos germes.' },
    { id: 20, cat: 'Higiene', nome: 'Papel Higiênico 12un', price: 17.50, img: imgDefault, desc: 'Papel folha dupla com máxima suavidade e absorção.' },
    { id: 21, cat: 'Higiene', nome: 'Escova de Dente Macia', price: 8.00, img: imgDefault, desc: 'Cerdas macias para limpeza gentil das gengivas.' },
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

function init() {
    const shop = document.getElementById('shop');
    if (!shop) return;
    
    const categories = [...new Set(database.map(p => p.cat))];
    let html = "";
    categories.forEach((cat) => {
        const products = database.filter(p => p.cat === cat);
        html += `
            <div class="category-section">
                <h2 class="category-title">${cat}</h2>
                <div class="product-row">
                    ${products.map(p => `
                        <div class="product-card" onclick="openProductModal(${p.id})">
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

window.filterProducts = function() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const filter = input.value.toLowerCase().trim();
    const sections = document.querySelectorAll('.category-section');
    const shop = document.getElementById('shop');
    let encontrouGeral = false;

    const antigaMsg = document.getElementById('search-error-msg');
    if (antigaMsg) antigaMsg.remove();

    sections.forEach(section => {
        const cards = section.querySelectorAll('.product-card');
        let temNaSecao = false;
        cards.forEach(card => {
            const nome = card.querySelector('.prod-name').innerText.toLowerCase();
            if (nome.includes(filter)) {
                card.style.display = "flex";
                temNaSecao = true;
                encontrouGeral = true;
            } else {
                card.style.display = "none";
            }
        });
        section.style.display = temNaSecao ? "block" : "none";
    });

    if (!encontrouGeral && filter !== "") {
        const termo = input.value;
        const msgZap = `Não achei o produto "${termo}" no site`;
        const linkZap = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msgZap)}`;
        
        const msg = document.createElement('div');
        msg.id = 'search-error-msg';
        msg.innerHTML = `
            <div style="background: white; padding: 40px 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; margin: 20px auto; max-width: 400px;">
                <p style="font-weight: 800; color: #333; margin-bottom: 15px;">Ops! Não encontramos "${termo}"</p>
                <a href="${linkZap}" target="_blank" style="background: #25D366; color: white; padding: 12px 25px; border-radius: 10px; text-decoration: none; font-weight: bold; display: inline-block;">
                    PEDIR "${termo.toUpperCase()}" NO ZAP
                </a>
            </div>`;
        shop.appendChild(msg);
    }
};

function openProductModal(id) {
    const p = database.find(x => x.id === id);
    const qtdNoCarrinho = cart.filter(item => item.id === id).length;
    modalQtyCount = qtdNoCarrinho > 0 ? qtdNoCarrinho : 1; 

    document.getElementById('modal-p-nome').innerText = p.nome;
    document.getElementById('modal-p-price').innerText = `R$ ${p.price.toFixed(2).replace('.',',')}`;
    document.getElementById('modal-p-desc').innerText = p.desc;
    document.getElementById('modal-p-img').innerHTML = `<img src="${p.img}">`;
    document.getElementById('modal-qty').innerText = modalQtyCount;

    document.getElementById('modal-add-btn').onclick = () => {
        cart = cart.filter(item => item.id !== id);
        for(let i=0; i < modalQtyCount; i++) {
            cart.push({ ...p, cartId: Date.now() + Math.random() });
        }
        updateUI();
        closeProductModal();
    };
    document.getElementById('product-modal').style.display = 'flex';
}

function closeProductModal() { document.getElementById('product-modal').style.display = 'none'; }
function changeModalQty(val) { 
    modalQtyCount += val; 
    if(modalQtyCount < 1) modalQtyCount = 1; 
    document.getElementById('modal-qty').innerText = modalQtyCount; 
}

function addToCart(id, btn) {
    const item = database.find(p => p.id === id);
    cart.push({ ...item, cartId: Date.now() + Math.random() });
    if(btn) {
        btn.innerText = "ADICIONADO"; btn.style.background = "#2ecc71";
        setTimeout(() => { btn.innerText = "ADICIONAR +"; btn.style.background = ""; }, 800);
    }
    updateUI();
}

function updateUI() {
    const total = cart.reduce((a, b) => a + b.price, 0);
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('total-price').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('cart-items').innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #eee;">
            <div><strong>${i.nome}</strong><br><small>R$ ${i.price.toFixed(2).replace('.',',')}</small></div>
            <button onclick="remove(${i.cartId})" style="color:red; border:none; background:none; font-weight:bold; cursor:pointer;">Remover</button>
        </div>`).join('');
}

function remove(uid) { cart = cart.filter(i => i.cartId !== uid); updateUI(); }
function openCart() { document.getElementById('cart-modal').style.display = 'flex'; }
function closeCart() { document.getElementById('cart-modal').style.display = 'none'; }

function toggleTroco() { 
    document.getElementById('troco-pergunta').style.display = (document.getElementById('pagamento').value === 'Dinheiro') ? 'block' : 'none'; 
}

function handleTrocoVisibility() {
    const choice = document.querySelector('input[name="troco_op"]:checked')?.value;
    document.getElementById('troco-container').style.display = (choice === 'sim') ? 'block' : 'none';
}

function sendWhatsApp() {
    const nome = document.getElementById('nome').value.trim();
    const end = document.getElementById('endereco').value.trim();
    const pag = document.getElementById('pagamento').value;
    
    if (nome.split(" ").length < 2) return alert("Preencha o nome completo!");
    if (end.length < 5) return alert("Preencha o endereço!");
    if (cart.length === 0) return alert("Carrinho vazio!");

    let text = `*PEDIDO TOP FARMA*%0A*Cliente:* ${nome}%0A*Endereço:* ${end}%0A%0A*ITENS:*%0A`;
    
    const resumo = {};
    cart.forEach(i => { resumo[i.nome] = (resumo[i.nome] || 0) + 1; });
    for (const [prod, qtd] of Object.entries(resumo)) { text += `- ${qtd}x ${prod}%0A`; }
    
    text += `%0A*TOTAL: ${document.getElementById('total-price').innerText}*%0A`;
    text += `*FORMA DE PAGAMENTO:* ${pag}%0A`;

    if (pag === "Dinheiro") {
        const trocoOp = document.querySelector('input[name="troco_op"]:checked')?.value;
        if (trocoOp === "sim") {
            const valorTroco = document.getElementById('valor-troco').value;
            text += `*Troco para:* ${valorTroco}%0A`;
        }
    }

    window.open(`https://wa.me/${WA_PHONE}?text=${text}`);
}

document.addEventListener('DOMContentLoaded', init);