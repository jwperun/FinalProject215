var app = new Vue({
  el: "#app",
  data: {
    initial: 0,
    empty: "",
    buttons: "Add to Cart",
    instruments: [
      {
        name: "Guitar",
        price: "test",
        brand: "Fender",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Fender_Stratocaster_004-2.jpg",
        color: "red",
        show: false
      },
      {
        name: "Piano",
        price: "test",
        brand: "Yamaha",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgravespianos.com%2Fwp-content%2Fuploads%2F2017%2F06%2FP6293264-Bechstein-Piano-1000x750.jpg&f=1&nofb=1",
        color: "green",
        show: false
      },
      {
        name: "Violin",
        price: "test",
        brand: "Fender",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.guitarcenter.com%2Fis%2Fimage%2FMMGS7%2FMy-Violin-Starter-Pack-1-4-Size%2FH73551000001000-00-500x500.jpg&f=1&nofb=1",
        color: "red",
        show: false
      },
      {
        name: "Trumpet",
        price: "test",
        brand: "Maton",
        img:
          "https://www.princemusiccompany.com/wp-content/uploads/2017/07/opal-OTR-100-smaller.jpg",
        color: "blue",
        show: false
      },
      {
        name: "Flute",
        price: "test",
        brand: "Yamaha",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_LFS8oX5Eo5o%2FTJ87Q0cvxjI%2FAAAAAAAAABU%2FPTNrYvstr6E%2Fs1600%2FFlute.jpg&f=1&nofb=1",
        color: "green",
        show: false
      },
      {
        name: "Drums",
        price: "test",
        brand: "Maton",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2Fgretsch_drums_ge4e825zb_entry_level_gretsch_drum_1332028.jpg&f=1&nofb=1",
        color: "blue",
        show: false
      },
    ],
    showPopUp: false,
    popUpItem: {},
    instrumentName: "",
    instrumentType: "",
    brandInput: "",
    priceInput: ""
  },
  methods: {
         increaseNumber: function(index) {
      this.initial = this.initial + 1;
      this.instruments.splice(index, 1);
          if (this.initial >= 6) {
        this.empty = "Store is empty!";
      }
    },
    
    //could not for the life of me get a proper popup working..
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      this.popUpItem=item;
    },
    
    resetNumber: function(index, data) {
      this.initial = 0;
      this.empty = "";
      this.instruments.length = 0;
      this.instruments.push({
        name: "Guitar",
        price: "test",
        brand: "Fender",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Fender_Stratocaster_004-2.jpg",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Piano",
        price: "test",
        brand: "Yamaha",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgravespianos.com%2Fwp-content%2Fuploads%2F2017%2F06%2FP6293264-Bechstein-Piano-1000x750.jpg&f=1&nofb=1",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Violin",
        price: "test",
        brand: "Fender",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.guitarcenter.com%2Fis%2Fimage%2FMMGS7%2FMy-Violin-Starter-Pack-1-4-Size%2FH73551000001000-00-500x500.jpg&f=1&nofb=1",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Trumpet",
        price: "test",
        brand: "Maton",
        img:
          "https://www.princemusiccompany.com/wp-content/uploads/2017/07/opal-OTR-100-smaller.jpg",
        color: "blue",
        show: false
      });
      this.instruments.push({
        name: "Flute",
        price: "test",
        brand: "Yamaha",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_LFS8oX5Eo5o%2FTJ87Q0cvxjI%2FAAAAAAAAABU%2FPTNrYvstr6E%2Fs1600%2FFlute.jpg&f=1&nofb=1",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Drums",
        price: "test",
        brand: "Maton",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2Fgretsch_drums_ge4e825zb_entry_level_gretsch_drum_1332028.jpg&f=1&nofb=1",
        color: "blue",
        show: false
      });
      
    },
    newInstrument: function() {
      this.instruments.push({
        name: this.instrumentName,
        brand: this.brandInput,
        price: this.priceInput,
        show: false,
        img:
          "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
      });

      this.instrumentName = "";
    }
  }
});