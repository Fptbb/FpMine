---
sidebar_position: 2
title: Autenticação
---

O Servidor utiliza o plugin "AuthMe Reloaded" para garantir a segurança das contas, cada jogador pode ter até 2 contas no servidor, porém é preciso verificar-se no Discord em cada uma delas com uma conta diferente.

Nessa página iremos explicar como registrar-se, logar e comandos uteis do processo.

## Registro e Segurança

Ao entrar pela primeira vez no servidor, o sistema vai te pedir para entrar no nosso servidor no Discord, que pode ser encontrado [clicando aqui](https://fpt.icu/discordMine), então entrar no privado do bot `Fp Mine#3747` e digitar um código numérico de 4 dígitos. Esse processo só acontece uma vez e garante que sua conta não seja falsa.
Depois disso, ao entrar no servidor, cadastre uma senha para a conta usando o comando `/register <Senha> <Senha>`. Marque essa senha em algum lugar, de preferência um aplicativo seguro.

Para evitar perdas caso não lembre ou não tenha marcado sua senha, use o comando `/email add <Seu Email>` e adicione um email configurado a sua conta.

## Login e Recuperação

Apos o cadastro, sempre ao entrar no servidor, faça login com o comando `/login <Senha>`. Caso tenha esquecido sua senha, use o comando `/email recover <Seu Email>` para iniciar o processo de recuperação de senha, apos isso o sistema ira lhe enviar um email com um código, use o código no comando `/email code <Código>` e logo depois `/email setpassword <Nova Senha>` para trocar sua senha.

## Comandos Uteis

- `/email show` = Mostra seu email atual cadastrado na conta
- `/email change <Email Atual> <Novo Email>` = Troca seu email cadastrado.
- `/changepassword <Senha Atual> <Nova Senha>` = Troca sua senha cadastrada.
- `/logout` = Desloga da sua conta.
