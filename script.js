const WA_PHONE = "5521987911068"; 
const imgDefault = "https://cdn-icons-png.flaticon.com/512/3028/3028549.png";

const database = [
    { id: 1,
        cat: 'Antigripal e imunidade', 
        nome: 'Vitergyl C 1g 3 por',
        price: 19.99, img: 'image/vitergyl.webp',
        priceOld: 'Medicamento: leia as advertências na descrição.',
        desc: 'Vitergyl C (cifarma); Indicação: Suplemento vitamínico auxiliar no sistema imunológico e em estados de deficiência de Vitamina C; Apresentação: Comprimidos efervescentes; Uso: Adulto e Pediátrico; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Legrand Pharma Indústria Farmacêutica Ltda; SAC: 0800 050 0600; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_stergyl.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
    { id: 2,
         cat: 'Antigripal e imunidade',
          nome: 'Cenevit Zinco c/10',
           price: 18.99, img: 'image/cenevit.webp',
           priceOld: ' leia as advertências na descrição.',
           desc: ' Cenevit Zinco ; Indicação: Suplemento vitamínico e mineral para auxílio do sistema imunológico e ação antioxidante; Apresentação: 10 comprimidos efervescentes; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Legrand Pharma Indústria Farmacêutica Ltda; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. // INFORMATIVO TÉCNICO: Finalidade: Auxiliar na proteção dos danos causados pelos radicais livres e no funcionamento do sistema imune; Composição: Ácido ascórbico (Vitamina C) e Zinco; Recomendação de uso: Dissolver 1 comprimido ao dia em um copo com água (200mL) e beber imediatamente após o término da desintegração; Cuidados: Não exceder a recomendação diária de consumo; Contraindicações: Hipersensibilidade a qualquer componente da fórmula e pacientes com histórico de cálculos renais de oxalato; Conservação: Manter em local seco, fresco e ao abrigo da luz; ESTE PRODUTO NÃO É UM MEDICAMENTO.' },
    { id: 3,
         cat: 'Antigripal e imunidade',
          nome: 'Bio C Tripla ação c/10', price: 23.99, img: 'image/bioc.jfif',
          priceOld: ' leia as advertências na descrição.',
          desc: 'Bio-C Tripla Ação (Bayer); Indicação: Suplemento alimentar para auxílio no funcionamento do sistema imune e metabolismo energético; Apresentação: 10 comprimidos efervescentes; Uso: Adulto e Pediátrico acima de 12 anos; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Bayer S.A.; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. // INFORMATIVO TÉCNICO: Finalidade: Combinação de Vitamina C, Vitamina D e Zinco que auxiliam na proteção contra danos dos radicais livres e fortalecem as defesas do organismo; Recomendação de uso: Dissolver 1 comprimido efervescente em um copo de água (aproximadamente 200mL) uma vez ao dia; Contraindicações: Não deve ser utilizado por pacientes com alergia a qualquer componente da fórmula, com insuficiência renal grave ou pedras nos rins; Atenção: Este produto não é um medicamento e não deve substituir uma alimentação equilibrada; Conservação: Manter o tubo bem fechado em lugar seco e fresco.' },
    { id: 4, 
        cat: 'Antigripal e imunidade',
         nome: 'Resfriliv chá',
          price: 4.50, img: 'image/resfriliv.jfif',
          priceOld: ' leia as advertências na descrição.',
         desc: 'Resfriliv Chá (Globo); Indicação: Auxiliar no alívio dos sintomas de gripes e resfriados através de bebida quente; Apresentação: Sachês para preparo; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Laboratório Globo Ltda; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. // INFORMATIVO TÉCNICO: Modo de Preparo: Dissolver o conteúdo do sachê em uma xícara com água quente (aproximadamente 200mL) e beber ainda morno; Composição: Geralmente composto por ingredientes como Vitamina C e extratos vegetais conforme a variante; Contraindicações: Hipersensibilidade aos componentes da fórmula; Atenção: Não exceder a recomendação de uso diária; Conservação: Manter em local seco e arejado.' },
    { id: 5,
         cat: 'Antigripal e imunidade',
          nome: 'Cimegripe c/20', 
          price: 14.99, img: 'image/cimegripe.jfif',
          priceOld: 'Medicamento: leia as advertências na descrição.',
          desc: 'Cimegripe (Cimed); Indicação: Alívio dos sintomas de gripes e resfriados (dor, febre e congestão nasal); Apresentação: Caixa com 20 cápsulas; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Cimed Indústria de Medicamentos Ltda; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_cimegripe.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
    { id: 6,
         cat: 'Antigripal e imunidade', 
         nome: 'Coristina D c/4',
          price: 14.60, img: 'image/coristina.jfif', 
          priceOld: 'Medicamento: leia as advertências na descrição.',
          desc: 'Coristina D; Indicação: Tratamento dos sintomas de gripes e resfriados, com ação descongestionante e antialérgica; Apresentação: 6 comprimidos; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Cosmed Indústria de Cosméticos e Medicamentos S.A.; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_coristina.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
    { id: 7,
         cat: 'Antigripal e imunidade',
          nome: 'Apracur c/6',
           price: 13.65, img: 'image/apracur.jfif', 
           priceOld: 'Medicamento: leia as advertências na descrição.',
           desc: ' Apracur; Indicação: Tratamento de sintomas de gripes e resfriados, dores de cabeça e musculares; Apresentação: 6 comprimidos; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Cosmed Indústria de Cosméticos e Medicamentos S.A.; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_apracur.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
            { id: 8,
                 cat: 'Antigripal e imunidade',
                  nome: 'Resfegripe c/20',
                   price: 12.99, priceOld: 'Medicamento: leia as advertências na descrição.',
                    img: 'image/resfegripe.webp',
                     desc: 'Resfegripe (Multilab); Indicação: Alívio dos sintomas de gripes e resfriados, como febre, dor e congestão nasal; Composição: Paracetamol, maleato de clorfeniramina e cloridrato de fenilefrina; Apresentação: Cápsulas; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Multilab Indústria e Comércio de Produtos Farmacêuticos Ltda; SAC: 0800 600 0660; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_resfegripe.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },

{ id: 15,
     cat: 'linha infantil',
      nome: 'Lenço Umedecido bebê Limpinho c/140',
       price: 9.99, img: 'image/umedecido.jfif',
       priceOld: 'por apenas:',
        desc: 'Lenço Umedecido Bebê Limpinho (C/140 unidades); Indicação: Higiene e limpeza da pele delicada do bebê; Características: Fórmula suave, sem álcool etílico, enriquecida com extratos naturais; Uso: Externo; Processo ANVISA nº: Consulte na Embalagem; Fabricado por: [Inserir Fabricante]; MANTENHA FORA DO ALCANCE DE CRIANÇAS; EM CASO DE IRRITAÇÃO, SUSPENDA O USO.' },
    { id: 16,
         cat: 'linha infantil',
          nome: 'Leite nestogeno 0-6 meses 800g',
           price: 64.99, img: 'image/nestogeno06.webp',
         priceOld: 'por apenas:',
            desc: 'Fórmula Infantil Nestogeno 1 (Nestlé) 800g; Indicação: Lactentes de 0 a 6 meses; Apresentação: Lata 800g; Registro MS: Consulte na Embalagem; Fabricado por: Nestlé Brasil Ltda; SAC: 0800 770 2459; AVISO IMPORTANTE: ESTE PRODUTO SOMENTE DEVE SER USADO NA ALIMENTAÇÃO DE CRIANÇAS MENORES DE 1 (UM) ANO DE IDADE COM INDICAÇÃO EXPRESSA DE MÉDICO OU NUTRICIONISTA. O ALEITAMENTO MATERNO EVITA INFECÇÕES E ALERGIAS E É RECOMENDADO ATÉ OS 2 (DOIS) ANOS DE IDADE OU MAIS.' },
   { id: 17,
         cat: 'linha infantil',
          nome: 'Leite nestogeno 6-12 meses 800g',
           price: 64.99, img: 'image/nestogeno612.webp',
         priceOld: 'por apenas:',
          desc: 'Fórmula Infantil Nestogeno 2 (Nestlé) 800g; Indicação: Lactentes de 6 a 12 meses; Apresentação: Lata 800g; Registro MS: Consulte na Embalagem; Fabricado por: Nestlé Brasil Ltda; SAC: 0800 770 2459; AVISO IMPORTANTE: ESTE PRODUTO NÃO DEVE SER USADO PARA ALIMENTAR CRIANÇAS MENORES DE 6 (SEIS) MESES DE IDADE. O ALEITAMENTO MATERNO EVITA INFECÇÕES E ALERGIAS E É RECOMENDADO ATÉ OS 2 (DOIS) ANOS DE IDADE OU MAIS.' },
    { id: 18,
         cat: 'linha infantil', 
         nome: 'Mucilon (Nestlé) 360g',
          price: 9.99, img: 'image/mucilon.jfif',
          priceOld: 'por apenas:',
           desc: 'Cereal Infantil Mucilon (Nestlé) 360g; Indicação: Complemento alimentar para crianças a partir de 6 meses; Apresentação: Sachê ou Lata 360g; Registro MS: Consulte na Embalagem; Fabricado por: Nestlé Brasil Ltda; AVISO IMPORTANTE: ESTE PRODUTO NÃO DEVE SER USADO PARA ALIMENTAR CRIANÇAS MENORES DE 6 (SEIS) MESES DE IDADE, A MENOS QUE INDICAÇÃO EXPRESSA DE MÉDICO OU NUTRICIONISTA. O ALEITAMENTO MATERNO EVITA INFECÇÕES E ALERGIAS E É RECOMENDADO ATÉ OS 2 (DOIS) ANOS DE IDADE OU MAIS.' },
    { id: 19, 
        cat: 'linha infantil',
         nome: 'Nistanina+ oxi de zinco neo quimica',
          price: 17.99, img: 'image/nistanina.webp',
         priceOld: 'Medicamento: leia as advertências na descrição.',
          desc: ' Nistatina + Óxido de Zinco (Neo Química); Indicação: Tratamento de assaduras e irritações na região das fraldas (dermite amoniacal); Apresentação: Pomada/Creme; Uso: Externo (Tópico); Registro MS: Consulte na Embalagem; Fabricado por: Brainfarma Indústria Química e Farmacêutica S.A.; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_nistanina.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
    { id: 20,
         cat: 'linha infantil',
          nome: 'Kit Salon Line Shampoo + condicionador infantil',
           price: 29.99, img: 'image/kitsalonline.jfif',
           priceOld: 'por apenas:',
            desc: 'Kit Salon Line Infantil (Shampoo + Condicionador)melancia,uva e maracuja; Indicação: Limpeza e desembaraço dos fios de crianças; Características: Testado dermatologicamente, fórmulas suaves e hipoalergênicas; Uso: Externo (Capilar); Processo ANVISA nº: Consulte na Embalagem; Fabricado por: Salon Line (Devintex Cosméticos); SAC: 0800 272 7272; MANTENHA FORA DO ALCANCE DE CRIANÇAS; DEVE SER APLICADO POR ADULTO OU SOB SUA SUPERVISÃO.' },

    { id: 80,
         cat: 'Cuidados Capilares',
          nome: 'Óleo de Coco Extra Virgem 70ml',
           price: 9.99, img: 'image/virgem70.jfif',
           priceOld: 'por apenas:',
            desc: 'Óleo de Coco Extra Virgem 70ml; Indicação: Uso culinário ou cosmético (umectação capilar e hidratação); Características: 100% natural e prensado a frio; Valor: R$ 9,99; Registro: Consulte na Embalagem; ATENÇÃO: CONSULTAR DISPONIBILIDADE PELO CHAT.' },
    { id: 9,
         cat: 'Cuidados Capilares',
          nome: 'Óleo de Coco Extra Virgem 100ml',
           price: 17.99, img: 'image/virgem100.jfif',
             priceOld: 'por apenas:',
            desc: 'Óleo de Coco Extra Virgem 100ml; Indicação: Uso culinário ou cosmético (umectação capilar e hidratação); Características: 100% natural e prensado a frio; Valor: R$ 17,99; Registro: Consulte na Embalagem; ATENÇÃO: CONSULTAR DISPONIBILIDADE PELO CHAT.' },
    { id:  10,
        cat: 'Cuidados Capilares',
          nome: 'Óleo de Coco Extra Virgem 200ml',
           price: 23.99, img: 'image/virgem200.jfif',
             priceOld: 'por apenas:',
            desc: 'Óleo de Coco Extra Virgem 200ml; Indicação: Uso culinário ou cosmético (umectação capilar e hidratação); Características: 100% natural e prensado a frio; Valor: R$ 23,99; Registro: Consulte na Embalagem; ATENÇÃO: CONSULTAR DISPONIBILIDADE PELO CHAT.' },
    { id: 11, 
        cat: 'Cuidados Capilares',
         nome: 'Óleo Natuhair',
          price: 11.99, img:'image/natuhair.jfif',
            priceOld: 'por apenas:',
           desc: 'Óleo Capilar NatuHair (Variantes); Opções: Mix de óleos, Óleo de argan, Azeite de oliva, Óleo de amêndoas, Óleo de babosa, Óleo de coco ou Óleo de alecrim; Indicação: Nutrição, hidratação e brilho para todos os tipos de cabelo; Apresentação: Frasco 60ml; Valor: R$ 11,99 (qualquer unidade); Uso: Externo (Capilar); Processo ANVISA nº: Consulte na Embalagem; Fabricado por: NatuHair (Skafe Cosméticos); ATENÇÃO: CONSULTAR DISPONIBILIDADE DE VARIANTES PELO CHAT.' },
    { id: 12,
         cat: 'Cuidados Capilares',
          nome: 'Kit shampoo + condicionador skala',
           price: 14.99, img: 'image/kitskala.jfif',
             priceOld: 'por apenas:',
            desc: 'Kit Shampoo + Condicionador Skala; Indicação: Cuidados diários para diferentes tipos de fios (hidratação, nutrição ou reconstrução); Apresentação: Kit com 2 unidades (Shampoo + Condicionador); Valor: R$ 14,99; Uso: Externo; Processo ANVISA nº: Consulte na Embalagem; Fabricado por: Skala Cosméticos; MANTENHA FORA DO ALCANCE DE CRIANÇAS; ATENÇÃO: CONSULTAR DISPONIBILIDADE DE LINHAS PELO CHAT.' },

{ id: 13,
         cat: 'poli vitaminícos',
          nome: 'Lavitan Cálcio + D3',
           price: 39.99, img: 'image/lavitan.png',
             priceOld: 'por apenas:',
            desc: 'Lavitan Cálcio + D3 (R$ 39,99): Suplemento mineral e vitamínico para saúde óssea e muscular, auxilia na manutenção de ossos e dentes com fórmula zero açúcares. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 14,
         cat: 'poli vitaminícos',
          nome: 'Lavitan mdk',
           price: 49.99, img: 'image/lavitanmdk.jfif',
             priceOld: 'por apenas:',
            desc: 'Lavitan MDK (R$ 49,99): Combinação de Magnésio, Vitamina D3 e Vitamina K2 que auxilia no direcionamento do cálcio para os ossos e na saúde cardiovascular. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 14,
         cat: 'poli vitaminícos',
          nome: 'colágeno tipo 2',
           price: 49.99, img: 'image/colageno.jfif',
             priceOld: 'por apenas:',
            desc: 'Colágeno Tipo II (R$ 49,99): Suplemento para manutenção da função articular e cartilagens, auxiliando na melhora da mobilidade e conforto dos movimentos. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 150,
         cat: 'poli vitaminícos',
          nome: 'osteocorp carbonato de cálcio 500mg c/60',
           price: 34.99, img: 'image/osteocorpe.jfif',
             priceOld: 'por apenas:',
            desc: 'Osteocorp Carbonato de Cálcio 500mg c/60 (R$ 34,99): Cálcio em alta concentração para reposição mineral, auxiliando no fortalecimento ósseo e prevenção da desmineralização. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 160,
         cat: 'poli vitaminícos',
          nome: 'vigura plus senior c/60',
           price: 34.99, img: 'image/vigura.jfif',
             priceOld: 'por apenas:',
            desc: 'Vigora Plus Sênior c/60 (R$ 34,99): Multivitamínico completo com antioxidantes desenvolvido para as necessidades nutricionais e vitalidade de pessoas acima de 50 anos. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 170,
         cat: 'poli vitaminícos',
          nome: 'vitasupraz jr líquido',
           price: 29.99, img: 'image/vitasupraz.jfif',
             priceOld: 'por apenas:',
            desc: 'Vitasupraz Jr Líquido (R$ 29,99): Suplemento vitamínico infantil de sabor agradável para auxiliar no crescimento, sistema imune e desenvolvimento saudável. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 180,
         cat: 'poli vitaminícos',
          nome: 'magnésio dimalato +d3 +k2',
           price: 41.99, img: 'image/magnesio.png',
             priceOld: 'por apenas:',
            desc: 'Magnésio Dimalato+D3+K2 (R$ 41,99): Fórmula de alta absorção para suporte neuromuscular, auxílio no metabolismo energético e saúde dos ossos. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },
            { id: 190,
         cat: 'poli vitaminícos',
          nome: 'whey protein nutri 900g 11g de EAA, 30g proteina',
           price: 92.00, img: 'image/whey.webp',
             priceOld: 'por apenas:',
            desc: 'Whey Protein Nutri 900g: Suplemento proteico com 30g de proteína e 11g de EAA por dose, ideal para recuperação e ganho de massa muscular. Produto dispensado de registro conforme RDC 240/2018. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças.' },


      {  id: 777, 
        cat: 'Promoção', 
        nome: 'Finetoss', 
        price: 28.99, // Coloque o preço da promoção
        priceOld: 'OFERTA ESPECIAL', 
        img: 'image/promo-finetoss.png', 
        },


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
    
    // 1. ATUALIZA O CONTADOR DA PROMOÇÃO (FINETOSS ID 777)
    const promoBtnContainer = document.getElementById('cart-ctrl-promo');
    if (promoBtnContainer) {
        promoBtnContainer.innerHTML = getCartControlHTML(777); 
    }

    // 2. ATUALIZA OS CARROSSEIS
    renderCarrossel('mais-vendidos', maisVendidosDB);
    renderCarrossel('super-ofertas', superOfertasDB);

    // 3. ATUALIZA A VITRINE PRINCIPAL
    if (searchTerm !== "") {
        filterProducts();
    } else if (currentCategory !== "") {
        // CORREÇÃO: Usar currentCategory em vez de categoryName
        const products = database.filter(p => p.cat.toLowerCase() === currentCategory.toLowerCase()); 
        renderProducts(products, currentCategory);
    }
}

// Função para mostrar ou esconder as seções de carrossel
function toggleSpecialSections(show) {
    const sections = document.querySelector('.special-sections');
    if (sections) {
        sections.style.display = show ? 'block' : 'none';
    }
}

// ATUALIZADA: Esconde carrossel ao filtrar por categoria (os círculos)
function filterByCategory(categoryName) {
    currentCategory = categoryName;
    const shop = document.getElementById('shop');
    const sobre = document.getElementById('sobre-nos');
    if (sobre) sobre.style.display = 'none';

    // ESCONDE AS FILEIRAS (Carrosséis)
    toggleSpecialSections(false);

    const products = database.filter(p => p.cat.toLowerCase() === categoryName.toLowerCase());
    renderProducts(products, categoryName);
    window.scrollTo({ top: shop.offsetTop - 100, behavior: 'smooth' });
}

// ATUALIZADA: Esconde carrossel ao buscar
window.filterProducts = function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sobre = document.getElementById('sobre-nos');
    const shop = document.getElementById('shop');

    if (searchTerm !== "") {
        if (sobre) sobre.style.display = 'none';
        toggleSpecialSections(false); // ESCONDE
    } else {
        if (currentCategory === "" && sobre) {
            sobre.style.display = 'block';
            toggleSpecialSections(true); // MOSTRA SE ESTIVER NA HOME
        }
    }
    
    if (searchTerm === "") {
        if (currentCategory) { 
            filterByCategory(currentCategory); 
        } else { 
            shop.innerHTML = ""; 
        }
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
                ${products.map(p => {
                    // Verifica se existe priceOld, se não existir deixa vazio
                    const fraseOuPrecoAntigo = p.priceOld ? `<span class="price-old">${p.priceOld}</span>` : "";
                    
                    return `
                    <div class="product-card" onclick="openProductModal(${p.id})">
                        <div class="img-placeholder"><img src="${p.img}"></div>
                        <p class="prod-name">${p.nome}</p>
                        ${fraseOuPrecoAntigo} <span class="price-now">R$ ${p.price.toFixed(2).replace('.',',')}</span>
                        <div id="cart-ctrl-${p.id}">
                            ${getCartControlHTML(p.id)}
                        </div>
                    </div>
                `}).join('')}
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
    document.getElementById('modal-p-desc').innerHTML = p.desc;
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
// ATUALIZADA: Mostra o carrossel ao voltar para a Home
function showAll() {
    currentCategory = "";
    const sobre = document.getElementById('sobre-nos');
    if (sobre) sobre.style.display = 'block';
    
    // MOSTRA AS FILEIRAS NOVAMENTE
    toggleSpecialSections(true);

    document.getElementById('shop').innerHTML = ""; 
    document.getElementById('searchInput').value = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ATUALIZADA: Esconde carrossel ao mostrar "Todos os produtos"
function showAllProducts() {
    currentCategory = "";
    const shop = document.getElementById('shop');
    const sobre = document.getElementById('sobre-nos');
    if (sobre) sobre.style.display = 'none';
    
    toggleSpecialSections(false); // ESCONDE

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
// --- NOVAS SEÇÕES (MAIS VENDIDOS E SUPER OFERTAS) ---

const maisVendidosDB = [
    { id: 901, cat: 'Destaque', nome: 'Expec Xarope 120 mL', price: 34.99, priceOld: 'Medicamento: leia as advertências na descrição.', img: 'image/expec.jfif', desc: 'Expec Xarope (Legrand); Indicação: Tratamento sintomático da tosse (irritativa, não produtiva) e fluidificante da secreção brônquica; Apresentação: Frasco com 120mL + copo medida; Uso: Adulto e Pediátrico acima de 2 anos; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Legrand Pharma Indústria Farmacêutica Ltda; SAC: 0800 050 0600; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. <br><br> <a href="pdf/bula_paciente_expec.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
    { id: 903, cat: 'Destaque', nome: 'Fralda Geriátrica Geriatex M/G/EG ', price: 23.99, priceOld: 'por apenas:', img: 'image/geriatex.png', desc: 'Fralda Geriátrica Geriatex Fralda descartável unissex para incontinência moderada a intensa. Destaques: Alta absorção, barreiras antivazamento e fitas ajustáveis. Conforto: Formato anatômico com controle de odor. Tamanho:M,G,EG Quantidade: M-9, G-7, EG- 7 unidades. Uso adulto. Descartável e hipoalergênica.' },
    { id: 904, cat: 'Destaque', nome: 'Nevralgex 3 Cartelas', price: 12.99, priceOld: 'Medicamento: leia as advertências na descrição.', img: 'image/nevralgex.webp', desc: 'Nevralgex (Cimed); Composição: Dipirona monoidratada, citrato de orfenadrina e cafeína anidra; Apresentação: Embalagem com 30 comprimidos (3 cartelas de 10); Uso: Adulto; Via: Oral; Indicação: Analgésico e relaxante muscular; Registro MS: Consulte na Embalagem; Fabricado por: Cimed Indústria de Medicamentos Ltda; SAC: 0800 704 4647; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. <br><br> <a href="pdf/bula_paciente_nevralgex.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>'},
    { id: 905, cat: 'Destaque', nome: 'Dorflex 3 CARTELAS c/10 comprimidos', price: 8.95, priceOld: 'Medicamento: leia as advertências na descrição.', img: 'image/dorflex.webp', desc: 'Dorflex (Sanofi); Composição: Dipirona monoidratada, citrato de orfenadrina e cafeína anidra; Apresentação: Embalagem com 30 comprimidos (3 cartelas de 10); Uso: Adulto; Via: Oral; Indicação: Alívio de dores associadas a contraturas musculares e cefaleia tensional; Registro MS: Consulte na Embalagem; Fabricado por: Sanofi Medley Farmacêutica Ltda; SAC: 0800 703 0033; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_dorflex.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>'},
     { id: 906, cat: 'Destaque', nome: 'Dipirona prati 500mg 3 cartelas', price: 9.99, priceOld: 'Medicamento GENÉRICO: leia as advertências na descrição.', img: 'image/dipirona.webp', desc: 'Dipirona Monoidratada Prati-Donaduzzi; Apresentação: Caixa com 30 comprimidos (3 cartelas de 10); Uso: Adulto e pediátrico; Via: Oral; Indicação: Analgésico e antitérmico; Registro MS: Consulte na Embalagem; Fabricado por: Prati, Donaduzzi & Cia Ltda; SAC: 0800 709 9333; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. <br><br> <a href="pdf/bula_paciente_dipirona.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>'},
     { id: 907, cat: 'Destaque', nome: 'ibuprofeno gotas geolab 100mg/ml Tutti Frutti', price: 14.99, priceOld: 'Medicamento GENÉRICO: leia as advertências na descrição.', img: 'image/ibuprofeno.jpeg', desc: ' Ibuprofeno Geolab 100mg/mL; Sabor: Tutti-Frutti; Apresentação: Suspensão oral em gotas (frasco 20mL); Uso: Adulto e pediátrico; Indicação: Antitérmico e analgésico; Registro MS: Consulte na Embalagem; Fabricado por: Geolab Indústria Farmacêutica S/A; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_ibuprofeno.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>'},
     { id: 908, cat: 'Destaque', nome: 'babymed pomada de assadura rosa ou azul', price: 9.99, priceOld: 'por apenas:', img: 'image/babymed.jfif', desc: 'Babymed (Cimed) Azul e Rosa; Indicação: Prevenção e tratamento de assaduras; Apresentação: Bisnaga; Uso: Infantil e Adulto; Registro MS: Consulte na Embalagem; Fabricado por: Cimed Indústria de Medicamentos Ltda; SAC: 0800 704 4647; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.' },
     { id: 909, cat: 'Destaque', nome: 'Creme skala potão 1kg ', price: 10.99, priceOld: 'por apenas:', img: 'image/skala.jfif', desc: 'Creme de Tratamento Skala 1kg (Todos os tipos); Indicação: Hidratação, Nutrição ou Reconstrução Capilar; Apresentação: Pote 1kg; Uso: Externo; Processo ANVISA nº: Consulte na Embalagem; Fabricado por: Skala Cosméticos; MANTENHA FORA DO ALCANCE DE CRIANÇAS; EM CASO DE IRRITAÇÃO, SUSPENDA O USO.' },
      { id: 910, cat: 'Destaque', nome: 'Vitergyl 1g(Vitamina C) c/10', price: 9.99, priceOld: 'Medicamento: leia as advertências na descrição.', img: 'image/vitergyl.webp', desc: 'Vitergyl C (cifarma); Indicação: Suplemento vitamínico auxiliar no sistema imunológico e em estados de deficiência de Vitamina C; Apresentação: Comprimidos efervescentes; Uso: Adulto e Pediátrico; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Legrand Pharma Indústria Farmacêutica Ltda; SAC: 0800 050 0600; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_stergyl.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
      { id: 911, cat: 'Destaque', nome: 'Resfegripe c/20', price: 12.99, priceOld: 'Medicamento: leia as advertências na descrição.', img: 'image/resfegripe.webp', desc: 'Resfegripe (Multilab); Indicação: Alívio dos sintomas de gripes e resfriados, como febre, dor e congestão nasal; Composição: Paracetamol, maleato de clorfeniramina e cloridrato de fenilefrina; Apresentação: Cápsulas; Uso: Adulto; Via: Oral; Registro MS: Consulte na Embalagem; Fabricado por: Multilab Indústria e Comércio de Produtos Farmacêuticos Ltda; SAC: 0800 600 0660; SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.<br><br> <a href="pdf/bula_paciente_resfegripe.pdf" target="_blank" style="color: #0000FE; font-weight: bold; text-decoration: underline;">📄 Ver Bula Completa (PDF)</a>' },
     { id: 912, cat: 'Destaque', nome: 'Creme Novex potão 1kg ', price: 24.99, priceOld: 'por apenas:', img: 'image/novex.jfif', desc: 'Creme de Tratamento Novex 1kg (Embelleze); Indicação: Hidratação profunda, nutrição ou reconstrução capilar (conforme variante); Apresentação: Pote 1kg; Uso: Externo (Capilar); Processo ANVISA nº: Consulte na Embalagem; Fabricado por: Embelleze (Itajubá Fabril Ltda); SAC: 0800 881 2667; Conservar em local fresco e ao abrigo da luz solar; MANTENHA FORA DO ALCANCE DE CRIANÇAS; EM CASO DE IRRITAÇÃO, SUSPENDA O USO.' },
      { id: 913, cat: 'Destaque', nome: 'Creme De Tratamento keraform 1kg ', price: 19.99, priceOld: 'por apenas:', img: 'image/keraform.jfif', desc: 'Creme de Tratamento Keraform 1kg (Skafe); Indicação: Tratamento intensivo conforme a necessidade do fio (hidratação/nutrição); Apresentação: Pote 1kg; Uso: Externo; Processo ANVISA nº: Consulte na Embalagem; Fabricado por: Skafe Cosméticos; SAC: 0800 709 8163; Conservar em local seco e fresco; MANTENHA FORA DO ALCANCE DE CRIANÇAS; EM CASO DE IRRITAÇÃO, SUSPENDA O USO.' },
      { id: 914, cat: 'Destaque', nome: 'Creme kanechom 1kg ', price: 9.99, priceOld: 'por apenas:', img: 'image/kanechom.jfif', desc: 'Creme Capilar Kanechom 1kg; Indicação: Condicionamento e tratamento capilar; Apresentação: Pote 1kg; Uso: Externo; Processo ANVISA nº: Consulte na Embalagem; Fabricado por: Kanechom (Indústrias de Cosméticos Kanechom Ltda); SAC: 0800 709 7771; Conservar em local fresco; MANTENHA FORA DO ALCANCE DE CRIANÇAS; EM CASO DE IRRITAÇÃO, SUSPENDA O USO.' },
      { id: 915, cat: 'Destaque', nome: 'Papel Higienico deluxe c/12 ', price: 9.99, priceOld: 'por apenas:', img: 'image/deluxe.webp', desc: 'Papel Higiênico Deluxe (Folha Dupla/Tripla); Apresentação: Pacote com 12 rolos; Características: Alta absorção e maciez; Composição: Fibras celulósicas naturais;  Prazo de Validade: Indeterminado, desde que mantido em local seco e arejado.' }


];

const superOfertasDB = [
    { id: 801, cat: 'Oferta', nome: 'Fralda G 40 Unid', price: 38.00, priceOld: 59.90, img: imgDefault, desc: 'Fralda descartável com alta absorção e barreiras antivazamento.' },
    { id: 802, cat: 'Oferta', nome: 'Shampoo Anticaspa', price: 14.50, priceOld: 22.90, img: imgDefault, desc: 'Limpeza profunda do couro cabeludo com ação refrescante.' },
    { id: 803, cat: 'Oferta', nome: 'Desodorante Aerosol', price: 9.90, priceOld: 16.00, img: imgDefault, desc: 'Proteção 48h contra o odor e transpiração.' },
    { id: 804, cat: 'Oferta', nome: 'Gel de Limpeza Facial', price: 27.50, priceOld: 45.00, img: imgDefault, desc: 'Remove a oleosidade sem agredir a barreira natural da pele.' }
];

// Garante que os produtos novos existam no banco de dados para as funções originais funcionarem
[...maisVendidosDB, ...superOfertasDB].forEach(p => {
    if (!database.find(x => x.id === p.id)) {
        database.push(p);
    }
});

// FUNÇÃO PARA RENDERIZAR O CARROSSEL (Agora usando seu padrão de botões)
function renderCarrossel(idContainer, listaProdutos) {
    const container = document.getElementById(idContainer);
    if (!container) return;

    container.innerHTML = listaProdutos.map(p => `
        <div class="card-carrossel" onclick="openProductModal(${p.id})">
            <img src="${p.img}" alt="${p.nome}">
            <div>
                <h3>${p.nome}</h3>
               <p class="price-old">${p.priceOld}</p>
                <p class="price-new">R$ ${p.price.toFixed(2).replace('.',',')}</p>
            </div>
            <div id="cart-ctrl-home-${p.id}">
                ${getCartControlHTML(p.id)}
            </div>
        </div>
    `).join('');
}

// ATUALIZADA: Para o contador mudar na Home em tempo real

// Inicializar e configurar arraste
document.addEventListener('DOMContentLoaded', () => {
    renderCarrossel('mais-vendidos', maisVendidosDB);
    renderCarrossel('super-ofertas', superOfertasDB);

    const tracks = document.querySelectorAll('.carousel-track');
    tracks.forEach(track => {
        let isDown = false; let startX; let scrollLeft;
        track.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; });
        track.addEventListener('mouseleave', () => isDown = false);
        track.addEventListener('mouseup', () => isDown = false);
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2;
            track.scrollLeft = scrollLeft - walk;
        });
    });
});
// Função para garantir que tudo carregue ao abrir o site
// Inicialização única e limpa
// Inicialização limpa e única
// Inicialização única e limpa
// Garante que o site carrega tudo corretamente ao abrir

function inicializarSite() {
    init(); 
    refreshProductList(); 
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarSite();

    // Configura o arrasto dos carrosséis (Touch/Mouse)
    const tracks = document.querySelectorAll('.carousel-track');
    tracks.forEach(track => {
        let isDown = false; let startX; let scrollLeft;
        track.addEventListener('mousedown', (e) => { 
            isDown = true; 
            startX = e.pageX - track.offsetLeft; 
            scrollLeft = track.scrollLeft; 
        });
        track.addEventListener('mouseleave', () => isDown = false);
        track.addEventListener('mouseup', () => isDown = false);
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2;
            track.scrollLeft = scrollLeft - walk;
        });
    });
});