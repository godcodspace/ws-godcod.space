# Script para configurar o VERCEL_TOKEN de forma segura

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "    Configuração do Token da Vercel no GitHub  " -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Por favor, cole o token da Vercel abaixo:" -ForegroundColor Yellow
Write-Host "(O token não será exibido na tela por segurança)" -ForegroundColor Gray
Write-Host ""

$token = Read-Host -AsSecureString "Token"
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
$plainToken = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

Write-Host ""
Write-Host "Configurando o token no GitHub..." -ForegroundColor Yellow

try {
    $plainToken | gh secret set VERCEL_TOKEN --repo godcodspace/ws-godcod.space
    Write-Host ""
    Write-Host "✅ Token configurado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Resumo dos secrets configurados:" -ForegroundColor Cyan
    Write-Host "   - VERCEL_TOKEN: ******* (configurado agora)" -ForegroundColor White
    Write-Host "   - VERCEL_ORG_ID: 0UKM2aC5N2sZUp5n1ZtFGxjc" -ForegroundColor White
    Write-Host "   - VERCEL_PROJECT_ID: prj_biDSjlYcG0H47qAfx29g6XpEgVHV" -ForegroundColor White
    Write-Host ""
    Write-Host "🚀 Próximos passos:" -ForegroundColor Yellow
    Write-Host "   1. Faça um push para testar o deploy automático" -ForegroundColor White
    Write-Host "   2. Acompanhe em: https://github.com/godcodspace/ws-godcod.space/actions" -ForegroundColor White
} catch {
    Write-Host "❌ Erro ao configurar o token: $_" -ForegroundColor Red
}

# Limpar a variável do token da memória
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($BSTR)
Remove-Variable plainToken -Force -ErrorAction SilentlyContinue
