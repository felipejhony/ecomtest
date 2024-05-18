-- @block
describe produto;

-- @block
select * from produto;


-- @Block
INSERT INTO produto (descricao, preco, imagem, categoria) VALUES
('Notebook Dell Inspiron', 3500.00, 'http://exemplo.com/imagens/notebook-dell.jpg', 'Informática'),
('Smartphone Samsung Galaxy', 2200.00, 'http://exemplo.com/imagens/samsung-galaxy.jpg', 'Eletrônicos'),
('Geladeira Brastemp', 4500.00, 'http://exemplo.com/imagens/geladeira-brastemp.jpg', 'Eletrodomésticos'),
('Cafeteira Nespresso', 800.00, 'http://exemplo.com/imagens/cafeteira-nespresso.jpg', 'Utensílios de Cozinha');



-- @Block
DELETE FROM produto
WHERE id IN (
    SELECT id FROM (
        SELECT id FROM produto
        ORDER BY id DESC
        LIMIT 4
    ) AS subquery
);