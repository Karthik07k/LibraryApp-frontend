export const oktaConfig ={
    clientId:'0oa9mjn6cmWiDwNN75d7',
    issuer:'https://dev-45453245.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid','profile','email'],
    pkce:true,
    disableHttpsCheck:true,
}