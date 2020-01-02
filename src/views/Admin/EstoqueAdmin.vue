<template>
  <div class="est-admin">
      <b-form>
          <input id="prod-id" type="hidden" v-model="estoque.ID_ESTOQUE" />
          <b-row>
              <b-col  sm="12">
                    <b-form-group label="NF" label-for="estoque-name">
                      <b-form-input id="estoque-name" type="number"
                      v-model="estoque.NOTA_FISCAL" required
                      :readonly="mode === 'remove'"
                      placeholder="Digite a NF" />
                  </b-form-group>

                  <b-form-group label="PRODUTOS" label-for="prod-categ">

                    <Select2 v-model="estoque.ID_PRODUTO" id="prod-categ" :options="produtos" :settings="{ placeholder: 'SELECIONE O PRODUTO'}" />

                    </b-form-group>

                  <b-form-group label="QT ENTRADA" label-for="estoque-name">
                      <b-form-input id="estoque-name" type="number"
                      v-model="estoque.QT_ENTRADA" required
                      :readonly="mode === 'remove'"
                      placeholder="Digite o Quantidade de Entrada" />
                  </b-form-group>

                 <b-form-group label="VL UNIT R$" label-for="vl-name">
                      <b-form-input id="vl-name" type="text"
                      v-model="estoque.VL_UNIT" required
                      :readonly="mode === 'remove'"
                      placeholder="R$ 0,00" />
                  </b-form-group>

              </b-col>
         </b-row>

        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>

        </b-form>
        <hr>
      <b-table hover striped :items="estoques" :fields="fields">
      </b-table>
  </div>
</template>

<script>
import Select2 from 'v-select2-component'
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
  name: 'EntradaMerc',
  components: { Select2 },
  data: function () {
    return {
      optionSelected: null,
      optionsSelected: null,
      mode: 'save',
      estoque: {},
      estoques: [],
      produto: {},
      produtos: [],
      fornecedor: {},
      fornecedores: [],
      categoria: {},
      categorias: [],
      fields: [
        { key: 'ID_ESTOQUE', label: 'ID_Entrada', sortable: true },
        { key: 'PRODUTO', label: 'Produto', sortable: true },
        { key: 'TIPO', label: 'Tipo', sortable: true },
        { key: 'DATA_ENTRADA', label: 'Data', sortable: true },
        { key: 'QT_ENTRADA', label: 'QT ENTRADA', sortable: true },
        { key: 'NOTA_FISCAL', label: 'NF', sortable: true }
      ]

    }
  },

  methods: {
    listarEstoques () {
      const url = `${baseApiUrl}/estoques`
      axios.get(url).then(res => {
        this.estoques = res.data
      })
    },

    listarFornecedores () {
      const url = `${baseApiUrl}/fornecedores`
      axios.get(url).then(res => {
        this.fornecedores = res.data.map(fornecedor => {
          return { ...fornecedor, value: fornecedor.ID_FORNECEDOR, text: fornecedor.NOME }
        })
        // this.fornecedores = res.data
      })
    },

    listarProdutos () {
      const url = `${baseApiUrl}/produtos`
      axios.get(url).then(res => {
        this.produtos = res.data.map(produto => {
          return { ...produto, id: produto.ID_PRODUTO, text: produto.PRODUTO }
        })
      })
    },

    listarMercadorias () {
      const url = `${baseApiUrl}/mercadorias`
      axios.get(url).then(res => {
        this.mercadorias = res.data
      })
    },

    reset () {
      this.mode = 'save'
      this.estoque = {}
      this.listarEstoques()
    },

    save () {
      const method = this.estoque.ID_ESTOQUE ? 'put' : 'post'
      const id = this.estoque.ID_ESTOQUE ? `/${this.estoque.ID_ESTOQUE}` : ''
      axios[method](`${baseApiUrl}/estoques/entrada${id}`, this.estoque)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    remove () {
      const id = this.produto.ID_PRODUTO
      axios.delete(`${baseApiUrl}/produtos/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    loadProduto (estoque, mode = 'save') {
      this.mode = mode
      this.estoque = { ...estoque }
    }
  },

  mounted () {
    this.listarProdutos()
    this.listarEstoques()
  }

}
</script>

<style>

</style>
