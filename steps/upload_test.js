Feature('Upload File');

Scenario('Fazer upload de imagem', ({I}) => {
    I.amOnPage('?controller=contact')

    I.selectOption("id_contact", "1")
    I.fillField('#email', 'e@e.com')
    I.fillField('#id_order', '123456')
    I.fillField('#message', 'Minha mensagem')

    I.attachFile('#fileUpload', 'images/image.png')

    I.click('#submitMessage')
});