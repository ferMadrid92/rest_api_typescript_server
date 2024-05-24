import swaggerJSDoc from "swagger-jsdoc"
import { SwaggerUiOptions } from "swagger-ui-express"

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for products'
        }
    },
    apis: ['./src/router.ts']
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss : `
        .topbar-wrapper .link {
            content: url('https://fernando-madrid.netlify.app/img/logo-fm.svg');
            height: 80px;
            width: auto;
        }
        .swagger-ui .topbar {
            background-color: #242426;
        }
    `,
    customSiteTitle: 'API Docs REST API Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}