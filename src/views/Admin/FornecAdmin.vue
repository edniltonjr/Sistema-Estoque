<template>
  <div class="fornec-admin">
      <b-form>
          <input id="fornec-id" type="hidden" v-model="fornecedor.ID_FORNECEDOR" />
          <b-row>
              <b-col md="6" sm="12">
                  <b-form-group label="Nome Fornecedor" label-for="fornecedor-name">
                      <b-form-input id="fornecedor-name" type="text"
                      v-model="fornecedor.NOME" required
                      :readonly="mode === 'remove'"
                      placeholder="Informe o Fornecedor" />
                  </b-form-group>
                <b-form-group label="CPF/CNPJ" label-for="fornecedor-cpf">
                      <b-form-input id="fornecedor-cpf" type="number"
                      v-model="fornecedor.CGC" required
                      :readonly="mode === 'remove'"
                      placeholder="Informe o CPF/CNPJ" />
                  </b-form-group>
              </b-col>
          </b-row>

        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>

      </b-form>
      <hr>
      <b-table hover striped :items="fornecedores" :fields="fields">
          <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadFornecedor(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadFornecedor(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
      </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError, userToken } from '@/errors/default.js'
import axios from 'axios'

export default {
  name: 'CategoryAdmin',
  data: function () {
    return {
      mode: 'save',
      fornecedor: {},
      fornecedores: [],
      fields: [
        { key: 'ID_FORNECEDOR', label: 'ID_Fornecedor', sortable: true },
        { key: 'NOME', label: 'Fornecedor', sortable: true },
        { key: 'CGC', label: 'CPF', sortable: true },
        { key: 'actions', label: 'Ações' }]
    }
  },

  methods: {
    listarFornecedores () {
      const url = `${baseApiUrl}/fornecedores`
      axios.get(url, userToken).then(res => {
        this.fornecedores = res.data
      })
    },

    reset () {
      this.mode = 'save'
      this.fornecedor = {}
      this.listarFornecedores()
    },

    save () {
      const method = this.fornecedor.ID_FORNECEDOR ? 'put' : 'post'
      const id = this.fornecedor.ID_FORNECEDOR ? `/${this.fornecedor.ID_FORNECEDOR}` : ''
      axios[method](`${baseApiUrl}/fornecedores${id}`, this.fornecedor, userToken)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    remove () {
      const id = this.fornecedor.ID_FORNECEDOR
      axios.delete(`${baseApiUrl}/fornecedores/${id}`, userToken)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    loadFornecedor (fornecedor, mode = 'save') {
      this.mode = mode
      this.fornecedor = { ...fornecedor }
    }
  },

  mounted () {
    this.listarFornecedores()
  }

}
</script>

<style>

</style>
