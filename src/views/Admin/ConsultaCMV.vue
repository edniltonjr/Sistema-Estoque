<template>
  <div class="est-admin">
      <b-form>
          <input id="prod-id" type="hidden" />
          <b-row>
              <b-col  sm="12">
                  <b-form-group label="Periodo" label-for="dtini">
                      <b-form-input id="dtini" type="date"
                       required v-model="consulta.DT_INI" />

                  <b-form-input id="dtfim" type="date"
                       required v-model="consulta.DT_FIM" />
                  </b-form-group>

                  <b-form-group label="PRODUTO" label-for="estoque-name">
                    <Select2 v-model="consulta.PRODUTO"  id="prod-categ" :options="produtos" :settings="{ placeholder: 'SELECIONE O PRODUTO'}" />
                  </b-form-group>

              </b-col>
         </b-row>

        <b-button variant="primary" v-if="mode === 'save'" @click="ConsultarCMV(consulta.DT_INI, consulta.DT_FIM, consulta.PRODUTO)">Consultar</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>

        </b-form>
        <hr>
      <b-table hover striped :items="estoques" :fields="fields">
      </b-table>
  </div>
</template>

<script>
import Select2 from 'v-select2-component'
import { baseApiUrl, userToken } from '@/errors/default'
import axios from 'axios'

export default {
  name: 'EntradaAdmin',
  components: { Select2 },
  data: function () {
    return {
      optionSelected: null,
      optionsSelected: null,
      mode: 'save',
      produto: {},
      produtos: [],
      consulta: {
        produto: ''
      },
      consultas: [],
      fields: [
        { key: 'PRODUTO', label: 'Produto', sortable: true },
        { key: 'ESTOQUE_INICIAL', label: 'Estoque Inicial', sortable: true },
        { key: 'ENTRADAS', label: 'Entradas', sortable: true },
        { key: 'SAIDAS', label: 'Saidas', sortable: true },
        { key: 'ESTOQUE_FINAL', label: 'Estoque Final', sortable: true }
      ]

    }
  },

  methods: {

    ConsultarCMV (DT_INI, DT_FIM, PRODUTO) {
      const url = `${baseApiUrl}/consultas/cmv?DT_INI=` + DT_INI + '&DT_FIM=' + DT_FIM + '&PRODUTO=' + PRODUTO
      axios.get(url, userToken).then(res => {
        this.consultas = res.data
      })
    },

    listarProdutos () {
      const url = `${baseApiUrl}/produtos`
      axios.get(url, userToken).then(res => {
        this.produtos = res.data.map(produto => {
          return { ...produto, id: produto.ID_PRODUTO, text: produto.PRODUTO }
        })
      })
    },

    reset () {
      this.mode = 'save'
      this.consulta = {}
      this.ConsultarCMV()
    }
  },

  mounted () {
    this.listarProdutos()
  }

}
</script>

<style>

</style>
