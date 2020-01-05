<template>
  <div class="category-admin">
      <b-form>
          <input id="categoria-id" type="hidden" v-model="categoria.ID_CATEGORIA" />
          <b-row>
              <b-col md="6" sm="12">
                  <b-form-group label="Descrição" label-for="categoria-name">
                      <b-form-input id="categoria-name" type="text"
                      v-model="categoria.DESCRICAO" required :readonly="mode === 'remove'"
                      placeholder="Informe a Descrição do Produto" />
                  </b-form-group>
              </b-col>
          </b-row>

        <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>

      </b-form>
      <hr>
      <b-table hover striped :items="categorias" :fields="fields">
          <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
      </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/errors/default'
import axios from 'axios'

export default {
  name: 'CategoryAdmin',
  data: function () {
    return {
      mode: 'save',
      categoria: {},
      categorias: [],
      fields: [
        { key: 'ID_CATEGORIA', label: 'Código', sortable: true },
        { key: 'DESCRICAO', label: 'Descrição', sortable: true },
        { key: 'actions', label: 'Ações' }
      ]
    }
  },
  methods: {
    listarCategorias () {
      const url = `${baseApiUrl}/categorias`
      axios.get(url).then(res => {
        this.categorias = res.data
      })
    },

    reset () {
      this.mode = 'save'
      this.categoria = {}
      this.listarCategorias()
    },

    save () {
      const method = this.categoria.ID_CATEGORIA ? 'put' : 'post'
      const id = this.categoria.ID_CATEGORIA ? `/${this.categoria.ID_CATEGORIA}` : ''
      axios[method](`${baseApiUrl}/categorias${id}`, this.categoria)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    remove () {
      const id = this.categoria.ID_CATEGORIA
      axios.delete(`${baseApiUrl}/categorias/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },

    loadCategory (categoria, mode = 'save') {
      this.mode = mode
      this.categoria = { ...categoria }
    }
  },

  mounted () {
    this.listarCategorias()
  }

}
</script>

<style>

</style>
