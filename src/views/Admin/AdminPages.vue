<template>
  <div class="admin-pages">
    <!-- <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros"/> -->

    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Produtos" active>
            <ProdutoAdmin/>
          </b-tab>
            <b-tab title="Fornecedores" active>
            <FornecAdmin/>
          </b-tab>
           <b-tab title="Categorias" active>
            <CategoryAdmin />
          </b-tab>
            <b-tab title="Entradas" active>
            <EntradaAdmin />
          </b-tab>
          <b-tab title="Saidas" active>
            <SaidaAdmin />
          </b-tab>
          <b-tab title="Consulta CMV" active>
            <ConsultaCMV />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ProdutoAdmin from './ProdAdmin'
import FornecAdmin from './FornecAdmin'
import CategoryAdmin from './CategoryAdmin'
import EntradaAdmin from './EntradaAdmin'
import SaidaAdmin from './SaidaAdmin'
import ConsultaCMV from './ConsultaCMV'
export default {
  name: 'AdminPages',
  components: {
    ProdutoAdmin,
    FornecAdmin,
    CategoryAdmin,
    EntradaAdmin,
    SaidaAdmin,
    ConsultaCMV
  }
}
</script>
