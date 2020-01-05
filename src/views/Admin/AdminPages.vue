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
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ProdutoAdmin from './ProdAdmin'
import FornecAdmin from './FornecAdmin'
import CategoryAdmin from './CategoryAdmin'
export default {
  name: 'AdminPages',
  components: {
    ProdutoAdmin,
    FornecAdmin,
    CategoryAdmin
  }
}
</script>
