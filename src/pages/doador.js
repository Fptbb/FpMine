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
        <h1 className="hero__title center">{siteConfig.title} - Vire um doador.</h1>
        <p className="hero__subtitle">
          Agora é possivel se tornar um doador no servidor, com alguns beneficios e permissões, e ainda ajudar a pagar os plugins do servidor
          (sim, eu fp, não fico com nada do valor doado, a compra é feita no momento da doação ou logo depois), caso queira fazer uma doação,
          o minimo a ser doado é 50 reais, levando em conta que plugins são bem caros, mas qualquer doação menor é aceita, apenas não vai
          receber os mesmos beneficios no servidor, os plugins a serem comprados estão na minha <a href="https://polymart.org/user/8512/wishlist">lista de desejos do polymart</a>,
          alguns plugins tem prioridade, então caso queira ajudar, entre em contato comigo no discord (fptbb#8760) e fale que quer ajudar e o valor,
          assim vejo qual plugin se encaixa. Caso queira doar valores menores ou diretamente, envie para o meu <a href='https://paypal.me/fptbb'>Paypal</a> ou no pix (l@fpt.icu)
          ou qualquer outro meio de pagamento que eu tenha (chamar no discord), todos os valores vão para a compra dos plugins, mas pode demorar mais porque vou esperar outras doações.
        </p>
        <br />
        <small>
          Apos fazer qualquer doação, me chame no discord e avise, infelizmente não temos o poder de adivinhar quem fez o pagamento, então não vou poder dar seu beneficio se não me avisar :).
        </small>
      </p>
      <br />
      <p>
        <ol>
          <blockquote>
            <p>
              <em>
                Abaixo estão listados os beneficios que quem doar valores maiores vai receber.
              </em>
            </p>
          </blockquote>
          <h1>
            <li>Elytras</li>
          </h1>
          <p>
            Por motivos maiores, Elytras estão desativadas por padrão no servidor, seja o motivo Lag, ou algo pior. Então resolvi colocar como um beneficio para doações acima de 100 reais.
          </p>
          <h1>
            <li>Acesso ao comando /backpack</li>
          </h1>
          <p>
            Acesso a utilização de uma bolsa portatil para guardar seus <s>lixos</s> itens, a bolsa varia de nivel, e chega até a 1 bau duplo completo de tamanho, doações menores vão receber
            niveis menores da bolsa, acumulando até 60 reais para receber todos os niveis. O acesso é permanente, incluindo caso troque de conta.
          </p>
          <h1>
            <li>Acesso ao comando /tpa</li>
          </h1>
          <p>
            Para facilitar sua vida, você podera teleportar para outros jogadores, claro, apenas se eles aceitarem.
          </p>
          <h1>
            <li>Outras coisas?</li>
          </h1>
          <p>
            Sim, talvez apareçam outras coisas aqui, se eu decidir algo legal que não interfira muito na jogatina. Caso tenha alguma ideia, envie pra mim.
          </p>
          <h1>
            <li><b>AVISO IMPORTANTE/DISCLAIMER</b></li>
          </h1>
          <p>
            Apenas lembrando e esclarecendo, todas as doações aqui descritas, podem ou não entregar beneficios permanentes, eu garanto, porem nenhuma doação,
            está passivel de retorno, ou seja, no momento que a doação for feita, eu não vou poder retornar o valor mais, porque eu mesmo não vou ter ele, e sim,
            o criador do recurso na qual o valor foi doado para, deixando isso claro, <b>nenhum pedido de retorno sera aceito</b> por motivos obvios.
          </p>
          <p>
            A ideia do servidor, é se manter ativo por anos a fio, o maximo que puder, mas caso algo fora do meu controle me obrigue a fechar o servidor,
            nenhuma doação sera retornada, pelos motivos descritos acima, que isso fique claro.
          </p>
        </ol>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Seja um Doador`}
      description='Beneficios de se tornar um doador.'
    >
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  )
}
