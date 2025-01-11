// Importando os módulos necessários do pacote 'winston' para criação de logs
import { createLogger, format, transports } from "winston";

// Criando o logger com a configuração desejada
const logger = createLogger({
  level: "info", // Define o nível de log padrão para 'info' (ou seja, logs de info ou superiores serão registrados)
  format: format.json(), // Define o formato de log como JSON (os logs serão armazenados como objetos JSON)
  transports: [
    // Transporta os logs para um arquivo 'error.log' quando o nível de log for 'error' ou superior
    new transports.File({ filename: "error.log", level: "error" }),
    // Transporta todos os logs (de nível 'info' ou superior) para o arquivo 'combined.log'
    new transports.File({ filename: "combined.log" }),
  ],
});

// Exportando o logger para uso em outras partes da aplicação
export default logger;
