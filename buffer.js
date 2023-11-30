// Buffer - representação de uma espaço de memoria do computador usados especificamente para transitar dados de uma forma muito rapida,
// são tratados de forma rapida e logo apagados da memoria.
// Um buffer é guardado de forma binária na memória, logo, é muito performático
// O buffer foi criado como uma API dentro do node justamente pelo JavaScript não ter uma solução performática para
// trabalho com dados binários

const buf = Buffer.from('hello');
console.log(buf.toJSON());
// Printa a entrada do buffer em hexadecimal
