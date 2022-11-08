import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import FpMineLogo from '@site/static/img/icon-transparent.svg';
import styles from './regras.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className="container text-white">
      <br />
      <p className={styles.intro}>
        <FpMineLogo alt="Site Logo" width={100} height={100} />
        <h1 className="hero__title center">{siteConfig.title} - Regras</h1>
        <p className="hero__subtitle">
          Aqui estão listadas as regras do servidor, leia tudo antes de entrar.
          Caso tenha alguma dúvida, entre em contato com algum staff.
        </p>
      </p>
      <br />
      <p>
        <ol>
          <blockquote>
            <p>
              <em>
                As regras aqui descritas devem ser lidas, e seguidas para a
                manutenção da ordem no servidor, é estritamente proibido
                dificultar o trabalho da moderação no caso da quebra de qualquer
                regra citada aqui, caso ache que algo está faltando ou pode ser
                melhorado, entre em contato com a moderação, ou diretamente com
                o{" "}</em>Fp<em>. Dificultar a ação da moderação só vai dificultar a sua
                  situação perante a moderação.
              </em>
            </p>
          </blockquote>
          <h1>
            <li>NÃO MATE RAPOSAS.</li>
          </h1>
          <p>
            É serio, eu não recomendo, alem de te tornar um monstro, pode ter efeitos não esperados. Ou mate, sei lá, eu só estou aqui pra dar um conselho. <a href='https://i.imgur.com/04yOWlo.png'>Não maltrate a raposa, ou a raposa maltrata você.</a>
          </p>
          <h1>
            <li>Respeito acima de tudo.</li>
          </h1>
          <p>
            Não preciso nem falar né, mas é bom lembrar, a primeira regra e a
            principal, que vai reger todas as outras é o respeito, acima de
            qualquer ação. Há também um limite na qual a sua brincadeira passa a
            ser chata, e ele deve ser respeitado. Lembre-se que todas as leis
            reais também valem para o servidor. Se você se sentiu desrespeitado,
            abra um ticket e peça ajuda a um moderador ou <em>staff</em>.
          </p>
          <p>
            Questões políticas e sociais, sobre qualquer que seja o assunto, não
            devem ser tratadas no servidor, o servidor é um local para se
            divertirem com amigos, e qualquer atitude preconceituosa, racista,
            homofóbica etc. vai ser tratada com banimento. Evite criar conflito
            devido a conflitos anteriores, caso algo tenha acontecido antes, só
            aja caso aconteça novamente, a moderação não vai julgar conflitos
            com base em ações fora do servidor.
          </p>
          <h1>
            <li>Conteúdo ofensivo não é permitido.</li>
          </h1>
          <p>
            Enquanto uma quantidade pequena de palavrões não é proibida, se for
            usada com muita frequência, e principalmente se for usada em direção
            a outro jogadores, não será permitido. Utilização de qualquer forma
            em jogo como apelidos, peles (<em>skins</em>), placas,{" "}
            <em>nametags</em>, áreas protegidas etc. para tal são proibidas, e
            estão sujeitas a moderação sem aviso, remoção da área protegida e
            dos itens em questão.
          </p>
          <h1>
            <li>Mantenha o chat amigável para crianças e a família.</li>
          </h1>
          <p>
            Esse servidor não tem restrições diretas de idade, ou seja, tenha o
            bom senso de manter o chat limpo, e não incitar nem incentivar
            assuntos polêmicos e extravagantes, principalmente quando jogadores
            desconhecidos entrarem. Caso alguém te peça para parar de falar de
            um assunto polêmico, respeite, lembre-se, todo o <em>chat</em> é
            sincronizado com o servidor do <em>Discord</em>, e podem ser usadas
            para moderação.
          </p>
          <h1>
            <li>Propaganda não é permitida.</li>
          </h1>
          <p>
            Propaganda não é permitida neste servidor a não ser as permitidas
            pelo criador ou pela staff. Caso queira pedir permissão, chame no
            servidor do <em>Discord</em>.
          </p>
          <h1>
            <li>
              <em>Spam</em> não é permitido.
            </li>
          </h1>
          <p>
            Spam de qualquer forma, seja de comandos (Tentativa de abuso de
            comandos a fim de criar intriga, atrapalhar, ou bloquear ações de
            outros jogadores, ou derrubar o servidor etc.), ou de chat
            (Mensagens repetidas, mensagens com caracteres inválidos, mensagens
            com todas as letras capitalizadas etc.), não é permitido, qualquer
            tentativa pode ser moderada. Não é aceito pedir itens/<em>OP</em>
            /cargo/etc., múltiplas vezes, nada disso vai ser dado mediante a
            pedido.
          </p>
          <p>
            Sobre <em>spam</em> de construções no mapa, evite construir torres
            1x1 ou construções sem utilidade clara, com a intenção de tornar a
            região feia, qualquer proteção feita em áreas assim pode ser
            removida sem aviso e o local <em>resetado</em>.
          </p>
          <h1>
            <li>
              Sobre Trapaças (<em>Cheat</em>/<em>Hack</em>).
            </li>
          </h1>
          <p>
            Apenas não, qualquer tipo de trapaça, que forneça algum benefício
            direto ao jogador, é proibido. Isso inclui <em>mods</em>/
            <em>apps</em>/clientes que dão benefícios em <em>PvP</em> (Combate
            entre dois jogadores), Movimentação, Utilidades, Construção e
            outros. <em>Bugs</em> no geral devem ser reportados.
          </p>
          <p>
            Não é proibida a utilização da sua própria conta inativa em uma{" "}
            <em>farm</em>, desde que não automatizada. Assim como não é proibida
            a utilização de qualquer <em>mod</em>/cliente que acione benefícios
            unicamente estéticos e que não interfiram no servidor, como
            mini-mapas, <em>shaders</em>, texturas, e <em>mods</em> que melhoram
            a performance do jogo.
          </p>
          <h1>
            <li>
              Sobre atitudes destrutivas (<em>Grief</em>).
            </li>
          </h1>

          <p>
            Todas são punidas com banimento desde que seja provado o dano e o
            flagrante. Lembre-se, no servidor, todos podem proteger suas
            construções, a fim de impedir isso, mas qualquer outra atitude
            pontual em construções menores, no entorno de uma base, ou qualquer
            outra variação, pode ser punida, grave e faça uma denúncia.
          </p>
          <p>
            É proibida a entrada sem permissão por meio de <em>bugs</em> em
            outras bases, e tentativas (ou o sucesso) em matar animais e outras
            criaturas nomeadas em <em>farms</em>, bases e outros terrenos.
            É proibida a construção intencional ou não intencional de estruturas
            que causem <em>lag</em> ao servidor, qualquer que for identificada,
            será destruída e o local <em>resetado</em>.
          </p>
        </ol>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Regras`}
      description='Regras do servidor.'
    >
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  )
}
