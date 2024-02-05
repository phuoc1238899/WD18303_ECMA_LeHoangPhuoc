export class productp {
  static async fetchData(url) {
    try {
      const response = await axios.get(url);
      return response.data; // Return the fetched data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async addData(data) {
    try {
      await axios.post("http://localhost:3000/categories", data);
      console.log("them loai thanh cong");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // delete cate
  static async deleteData(id) {
    try {
      await axios.delete(`http://localhost:3000/categories/${id}`);
      console.log("xoa duoc roi");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // update cate
  static async updateData(id, updatedCategory) {
    try {
      const response = await axios.put(
        `http://localhost:3000/categories/${id}`,
        updatedCategory
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async getDataById(id) {
    try {
      const response = await axios.get(
        `http://localhost:3000/categories/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // addproduct
  static async addData1(data) {
    try {
      await axios.post("http://localhost:3000/products", data);
      console.log("them sp thanh cong");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async deleteData2(id) {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      console.log("xoa duoc roi");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async updateData2(id, updatedProduct) {
    try {
      const response = await axios.put(
        `http://localhost:3000/products/${id}`,
        updatedProduct
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async getDataById2(id) {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // oders 
  static async updateData3(id, updatedOrder) {
    try {
      const response = await axios.put(
        `http://localhost:3000/orders/${id}`,
        updatedOrder
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  static async getDataById3(id) {
    try {
      const response = await axios.get(
        `http://localhost:3000/orders/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // dung chung
  static async getlastId(url) {
    try {
      const response = await axios.get(url);
      return response.data[response.data.length - 1].id; // Return the fetched data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
