import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import * as Yup from "yup";
import { storage } from "../../upload/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getCategories } from "../../service/categoryService";
import {
   addProduct,
   editProduct,
   getProductById,
} from "../../service/productService";
const validateSchema = Yup.object().shape({
   nameProduct: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
   description: Yup.string()
      .min(2, "Too short!")
      .max(5000, "Too long!")
      .required("Required"),
});

export default function EditProduct() {
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const categories = useSelector((state) => {
      return state.categories.categories;
   });
   const [images, setImages] = useState([]);
   const [urls, setUrls] = useState("");
   const [progress, setProgress] = useState(0);
   const [file, setFile] = useState("");
   const [url, setUrl] = useState("");
   const [percent, setPercent] = useState(0);

   const handleChange = (e) => {
      for (let i = 0; i < e.target.files.length; i++) {
         const newImage = e.target.files[i];
         newImage["id"] = Math.random();
         setImages((prevState) => [...prevState, newImage]);
      }
   };

   const handleUpload = async (event) => {
      setFile(event.target.files[0]);
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
         "state_changed",
         (snapshot) => {
            const percent = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
         },
         (err) => console.log(err),
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
               setUrls(url);
            });
         }
      );
   };

   const product = useSelector((state) => {
      return state.products.product;
   });
   const loading = useSelector((state) => {
      return state.products.loading;
   });
   const user = useSelector((state) => {
      return state.users.users;
   });
   const handleEditProduct = (values) => {
      let data = { ...values, image: urls };
      dispatch(editProduct(data)).then((value) => {
         swal("Edit Success !!!");
         navigate(`/shop-manager/${product.idShop}`);
      });
   };
   useEffect(() => {
      if (user === undefined) {
         navigate(`/`);
      }
      dispatch(getProductById(id)).then((e) => {
         let data = e.payload
         if (data.idUser !== user.idUser) {
            navigate(`/`)
         } else {
            setUrls(e.payload.image);
         }
      });
   }, []);
   useEffect(() => {
      dispatch(getCategories());
   }, []);
   return (
      <div className="row mt-3">
         <div className="col-2"></div>
         <div class="container-xxl py-5 col-8 bg-light">
            <div class="container">
               <div
                  class="text-center mx-auto mb-5"
                  style={{ maxWidth: "600px" }}>
                  <h1 class="mb-3">Cập Nhật Thông Tin Sản Phẩm</h1>
               </div>
               <div class="row g-4">
                  <div class="col-md-4">
                     <img
                        className="position-relative rounded w-100 h-100"
                        style={{ height: "300px", width: "100%" }}
                        src={urls}
                        alt="Error"
                     />
                  </div>
                  <div class="col-md-8">
                     <div>
                        <Formik
                           initialValues={{
                              idProduct: product.idProduct,
                              nameProduct: product.nameProduct,
                              description: product.description,
                              price: product.price,
                              quantity: product.quantity,
                              idCategory: product.idCategory,
                           }}
                           validationSchema={validateSchema}
                           onSubmit={(values) => {
                              handleEditProduct(values);
                           }}
                           enableReinitialize={true}>
                           <Form>
                              <div class="row g-3">
                                 <div class="col-12">
                                    <div>
                                       <label
                                          for="nameProduct"
                                          style={{ color: "#ff0800" }}>
                                          Tên Sản Phẩm
                                       </label>
                                       <Field
                                          type="text"
                                          class="form-control"
                                          name={"nameProduct"}
                                          id="nameProduct"
                                       />
                                       <alert className="text-danger">
                                          <ErrorMessage
                                             name={
                                                "nameProduct"
                                             }></ErrorMessage>
                                       </alert>
                                    </div>
                                 </div>
                                 <div class="col-12 mt-2">
                                    <div>
                                       <label
                                          for="description"
                                          style={{ color: "#ff0800" }}>
                                          Mô Tả
                                       </label>
                                       <Field
                                          as={"textarea"}
                                          class="form-control"
                                          name={"description"}
                                          id="description"
                                          style={{ height: "150px" }}
                                       />
                                       <alert className="text-danger">
                                          <ErrorMessage
                                             name={
                                                "description"
                                             }></ErrorMessage>
                                       </alert>
                                    </div>
                                 </div>
                                 <div class="col-md-6 mt-2">
                                    <div>
                                       <label
                                          for="price"
                                          style={{ color: "#ff0800" }}>
                                          Giá
                                       </label>
                                       <Field
                                          type="number"
                                          class="form-control"
                                          name={"price"}
                                          id="price"
                                       />
                                    </div>
                                 </div>
                                 <div class="col-md-6 mt-2">
                                    <div>
                                       <label
                                          for="quantity"
                                          style={{ color: "#ff0800" }}>
                                          Số Lượng
                                       </label>
                                       <Field
                                          type="number"
                                          class="form-control"
                                          name={"quantity"}
                                          id="quantity"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-12 mt-2">
                                    <label
                                       for="quantity"
                                       style={{ color: "#ff0800" }}>
                                       Danh Mục
                                    </label>
                                    <Field
                                       as="select"
                                       name={"idCategory"}
                                       className="form-control"
                                       id="idCategory">
                                       {categories !== undefined &&
                                          categories.map((item, index) => (
                                             <option
                                                key={index}
                                                value={item.idCategory}>
                                                {item.nameCategory}
                                             </option>
                                          ))}
                                    </Field>
                                 </div>
                                 <div class="input-group p-3">
                                    <div class="input-group-prepend">
                                       <span
                                          class="input-group-text"
                                          id="inputGroupFileAddon01">
                                          Tải Ảnh
                                       </span>
                                    </div>
                                    <div class="custom-file">
                                       <input
                                          type="file"
                                          class="custom-file-input"
                                          id="inputGroupFile01"
                                          aria-describedby="inputGroupFileAddon01"
                                          multiple
                                          onMouseOut={handleUpload}
                                       />
                                       <label
                                          class="custom-file-label"
                                          for="inputGroupFile01">
                                          Chọn tệp
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-12 mt-2">
                                    <button
                                       class="btn-add w-100 py-3"
                                       type="submit">
                                       Chỉnh Sửa
                                    </button>
                                 </div>
                              </div>
                           </Form>
                        </Formik>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-2"></div>
      </div>
   );
}
