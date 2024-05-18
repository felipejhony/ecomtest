-- @Block
CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    preco FLOAT(8,2) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    categoria VARCHAR(255) NOT NULL
);
