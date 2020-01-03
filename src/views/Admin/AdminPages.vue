<template>
  <div class="admin-pages">
    <!-- <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros"/> -->

    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Aba 1" active>
            Teste Mundo
          </b-tab>
          <!-- <b-tab title="Produtos" active>
            <ProdutoAdmin />
          </b-tab>
            <b-tab title="Fornecedores" active>
            <FornecAdmin />
          </b-tab> -->
          <!-- <b-tab title="Categorias" active>
            <CategoryAdmin />
          </b-tab> -->
          <!-- <b-tab title="Entrada Produtos" active>
            <EstoqueAdmin />
          </b-tab>
          <b-tab title="Saidas Produtos" active>
            <SaidaMercAdmin />
          </b-tab> -->
          <!-- <b-tab title="Consultas" active>
            <ConsultaAdmin />
          </b-tab> -->
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
// import EstoqueAdmin from './EstoqueAdmin'
// import SaidaMercAdmin from './SaidaMercAdmin'
// import ProdutoAdmin from './ProdAdmin'
// import FornecAdmin from './FornecAdmin'
// import CategoryAdmin from './CategoryAdmin'
// import ConsultaAdmin from './ConsultaAdmin'
// import PageTitle from '@/components/template/PageTitle'
export default {
  name: 'AdminPages',
  components: {
    // PageTitle,
    // CategoryAdmin,
    // FornecAdmin,
    // ProdutoAdmin,
    // ConsultaAdmin,
    // EstoqueAdmin,
    // SaidaMercAdmin
  }
}
</script>
