<template>
  <div class="prod-admin">
      <b-form>
          <input id="prod-id" type="hidden" v-model="produto.ID_PRODUTO" />
          <b-row>
              <b-col md="6" sm="12">

                  <b-form-group label="Nome Produto" label-for="produto-name">
                    <b-form-input id="produto-name" type="text"
                    v-model="produto.DESCRICAO" required
                    :readonly="mode === 'remove'"
                    placeholder="Informe a Descrição" />
                  </b-form-group>

                  <b-form-group label="FORNECEDOR" label-for="fornec-categ">
                        <b-form-select id="fornecedor-categ" :options="fornecedores" v-model="produto.ID_FORNECEDOR">
                        </b-form-select>
                  </b-form-group>

                  <b-form-group label="CATEGORIA">
                      <b-form-select id="produto-categ" :options="categorias" v-model="produto.ID_CATEGORIA">
                      </b-form-select>
                  </b-form-group>

              </b-col>
         </b-row>
        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>

        </b-form>
        <hr>
      <b-table hover striped :items="produtos" :fields="fields">
          <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadProduto(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadProduto(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
      </b-table>
  </div>
</template>

<script>
import { showError, userToken } from '@/errors/default.js'
import axios from 'axios'
const baseApiUrl = process.env.VUE_APP_BASE_API_URL

export default {
  name: 'ProdutoAdmin',
  data: function () {
    return {
      mode: 'save',
      produto: {},
      produtos: [],
      fornecedor: {},
      fornecedores: [],
      categoria: {},
      categorias: [],
      fields: [
        { key: 'ID_PRODUTO', label: 'ID_Produto', sortable: true },
        { key: 'PRODUTO', label: 'Produto', sortable: true },
        { key: 'CATEGORIA', label: 'Categoria', sortable: true },
        { key: 'FORNECEDOR', label: 'Fornecedor', sortable: true },
        { key: 'actions', label: 'Ações' }]

    }
  },

  methods: {
    listarCategorias () {
      const url = `${baseApiUrl}/categorias`
      axios.get(url, userToken).then(res => {
        this.categorias = res.data.map(categoria => {
          return { ...categoria, value: categoria.ID_CATEGORIA, text: categoria.DESCRICAO }
        })
      })
    },

    listarFornecedores () {
      const url = `${baseApiUrl}/fornecedores`
      axios.get(url, userToken).then(res => {
        this.fornecedores = res.data.map(fornecedor => {
          return { ...fornecedor, value: fornecedor.ID_FORNECEDOR, text: fornecedor.NOME }
        })
        // this.fornecedores = res.data
      })
    },

    listarProdutos () {
      const url = `${baseApiUrl}/produtos`
      axios.get(url, userToken).then(res => {
        this.produtos = res.data
      })
    },

    reset () {
      this.mode = 'save'
      this.produto = {}
      this.listarProdutos()
    },

    save () {
      const method = this.produto.ID_PRODUTO ? 'put' : 'post'
      const id = this.produto.ID_PRODUTO ? `/${this.produto.ID_PRODUTO}` : ''
      axios[method](`${baseApiUrl}/produtos${id}`, this.produto, userToken)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    remove () {
      const id = this.produto.ID_PRODUTO
      axios.delete(`${baseApiUrl}/produtos/${id}`, userToken)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    loadProduto (produto, mode = 'save') {
      this.mode = mode
      this.produto = { ...produto }
    }
  },

  mounted () {
    this.listarProdutos()
    this.listarFornecedores()
    this.listarCategorias()
  }

}
</script>

<style>

</style>
