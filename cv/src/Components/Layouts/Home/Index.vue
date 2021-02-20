<template>
  <div id="Home">
    <h2 class="text-center mb-3 mt-3">Demo tương tác với Firebase (Home)</h2>
    <hr />

    <h4>Tạo phone</h4>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        ref="input-name"
        placeholder="Phone name"
        v-model="phone.name"
        @keyup.enter="createPhone"
      />
    </div>
    <div class="form-group">
      <input
        placeholder="Quantity"
        type="text"
        class="form-control"
        v-model="phone.quantity"
        @keyup.enter="createPhone"
      />
    </div>
    <button class="btn btn-primary btn-block mt-3 mb-3" @click="createPhone">Create Phone</button>
    <table class="table">
      <thead>
        <tr>
          <td>Phone name</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(phone, key) in phones" :key="key">
          <td>{{ phone.name }}</td>
          <td>{{ phone.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <hr />

    <h4>Lấy users theo node</h4>
    <input type="text" v-model="node" class="form-control" />
    <button
      class="btn btn-success mt-3 mb-3 btn-block"
      :disabled="node ? false : true"
      @click="getUsersFromNode(node)"
    >Get user</button>

    <table class="table">
      <thead>
        <tr>
          <td>User name</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, key) in usersFromNode" :key="key">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>

    <hr />
    <hr />

    <h4>Thêm user</h4>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        ref="input-name"
        placeholder="Username"
        v-model="user.name"
        @keyup.enter="submitForm"
      />
    </div>
    <div class="form-group">
      <input
        placeholder="Email"
        type="text"
        class="form-control"
        v-model="user.email"
        @keyup.enter="submitForm"
      />
    </div>
    <button class="btn btn-primary btn-block" @click="submitForm">Submit</button>

    <hr />

    <table class="table">
      <thead>
        <tr>
          <td>Username</td>
          <td>Email</td>
          <td>Tác vụ</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, key) in users" :key="key">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-outline-secondary btn-sm" @click="editUser(key)">Sửa</button>
            <button class="btn btn-danger btn-sm" @click="deleteUser(key)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>

      <br />
      <ul class="list-group">
        <li class="list-group-item" v-for="(car, index) in appendName(' - ver 1')" :key="index">{{ car }}</li>
      </ul>

      <br />

      <h2 v-customCSS="`green`">Home page ad color now</h2>
      <h2 v-customCSS:background="`green`">Home page add background now</h2>
      <h2
        v-customCSS:background.delay.okok.hehe.haha="`green`"
      >Home page add background with "delay"</h2>

      <h2
        v-local-custom:background="{color: 'red', interval: 500}"
      >Home page add background now by local custom with delay</h2>
      <hr />
      <hr />
      <h2
        v-animation="{interval: 50, left: -5, right: 5 }"
        v-customCSS:background="'red'"
      >{{ msg | chuThuong }}</h2>
      <!-- sử dụng filter tại local -->

      <h2 v-animation:lak="{interval: 50, left: -5, right: 5 }">{{ msg | chuThuong }}</h2>
      <!-- sử dụng filter tại local -->
      
      <h2>{{ 'chu hoa' | chuHoa }}</h2>
      <!-- sử dụng filter từ main -->
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../main.js";
export default {
  created() {
    const customAction = {
      createUser: {
        method: "POST",
        url: "users.json",
      },
      getUsers: {
        method: "GET",
        url: "data.json",
      },
      getUsersFromNode: {
        method: "GET",
      },
      createPhone: {
        method: "POST",
        url: "phone.json",
      },
      getPhones: {
        method: "GET",
        url: "phone.json",
      },
    };

    this.resource = this.$resource("{node}.json", {}, customAction);
    this.getUsers();
    this.getPhones();
  },
  methods: {
    submitForm() {
      if (this.user.name && this.user.email) {
        this.resource
          .createUser(this.user)
          .then((res) => {
            this.users[res.data.name] = {
              name: this.user.name,
              email: this.user.email,
            };

            this.user.name = "";
            this.user.email = "";

            this.$refs["input-name"].focus();
          })
          .catch((err) => {});
      }
    },
    getUsers() {
      this.resource.getUsers().then((res) => {
        this.users = res.data;
      });
    },
    getUsersFromNode(node) {
      this.resource.getUsersFromNode({ node: node }).then((res) => {
        this.usersFromNode = res.data;
      });
    },
    createPhone() {
      this.resource.createPhone(this.phone).then((res) => {
        this.phones.unshift({
          name: this.phone.name,
          quantity: this.phone.quantity,
        });
      });
    },
    getPhones() {
      this.resource.getPhones().then((res) => {
        this.phones = res.data;
      });
    },
  },
  data() {
    return {
      msg: "ANIMATIon",
      showAlert: false,

      user: {
        name: "",
        email: "",
      },
      users: [],
      resource: {},
      node: "",
      usersFromNode: [],

      phone: {
        name: "",
        quantity: 1,
      },
      phones: [],
    };
  },
  filters: {
    chuThuong(text) {
      return text.toLowerCase();
    },
  },
  directives: {
    animation: {
      bind(el, binding, vnode) {
        if (binding.arg == "lak") {
          el.style.transition = `all ${binding.value.interval / 1000}s`;
          el.style.width = "fit-content";
          var rotate = binding.value.right;
          setInterval(() => {
            rotate =
              rotate == binding.value.right
                ? binding.value.left
                : binding.value.right;
            el.style.transform = `rotate(${rotate}deg)`;
          }, binding.value.interval);
        } else {
          el.style.transition = "all .5s";
          var vec = 10;
          setInterval(() => {
            el.style.transform = `translateY(${vec}px)`;
            vec = vec == 10 ? -10 : 10;
          }, 500);
        }
      },
    },
    "local-custom": {
      bind(el, binding, vnode) {
        var delay = binding.value.delay ? binding.value.delay : 0,
          color = binding.value.color ? binding.value.color : "blue",
          interval = binding.value.interval ? binding.value.interval : false;
        el.style.transition = "all .5s";
        setTimeout(() => {
          if (interval) {
            setInterval(() => {
              color =
                color == binding.value.color ? "green" : binding.value.color;
              binding.arg == "background"
                ? (el.style.background = color)
                : (el.style.color = color);
            }, interval);
          } else
            binding.arg == "background"
              ? (el.style.background = color)
              : (el.style.color = color);
        }, delay);
      },
    },
  },
};
</script>
