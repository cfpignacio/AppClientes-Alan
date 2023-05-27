const logo = document.querySelector<HTMLAnchorElement>("#logo");
const main = document.querySelector<HTMLDivElement>("#main");
const home = document.querySelector<HTMLAnchorElement>("#home");
const clientes = document.querySelector<HTMLAnchorElement>("#clientes");
const crearClientes =
	document.querySelector<HTMLAnchorElement>("#crearClientes");

const cargarContenido = () => {
	main!.innerHTML = `
    <div class="hero">
    <div class="container my-5">
        <div
            class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
        >
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                    App Clientes
                </h1>
                <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                    sint delectus perspiciatis quas animi repellat laborum numquam
                    veniam sed voluptatum fuga.
                </p>
                <div
                    class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                >
                    <button
                        type="button"
                        class="btn btn-primary btn-md px-4 me-md-2 fw-bold"
                    >
                        Ir a Clientes
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-secondary btn-md px-4"
                    >
                        Contacto
                    </button>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                <img
                    class="svg-image"
                    src="src/assets/img/undraw_Engineering_team.png"
                    alt=""
                    width="100%"
                />
            </div>
        </div>
    </div>
</div>`;
};

window.addEventListener("load", () => {
	cargarContenido();
});

logo?.addEventListener("click", () => {
	cargarContenido();
});

home?.addEventListener("click", () => {
	cargarContenido();
});

crearClientes?.addEventListener("click", () => {
	main!.innerHTML = `
    <div class="container my-5">
        <div
            class="row p-4 pb-0 pe-lg-0 pt-lg-5 justify-content-start align-items-center rounded-3 border shadow-lg"
        >
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-6 fw-bold lh-1 text-body-emphasis mb-5">
                Crear Cliente:
                </h1>
                <div
                    class="d-grid gap-2 d-flex justify-content-end mb-4 mb-lg-3"
                >
                <div class="input-box">
                    <label class="input-label">Nombre</label>
                    <input placeholder="Ingrese nombre..." class="input" name="email" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Apellido</label>
                    <input placeholder="Ingrese apellido..." class="input" name="email" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Telefono</label>
                    <input placeholder="Ingrese telefono..." class="input" name="email" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Empresa</label>
                    <input placeholder="Ingrese empresa..." class="input" name="email" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>
                </div>
                    <div class="input-box">
                        <label class="input-label">Cuit/Cuil</label>
                        <input placeholder="Ingrese cuit/cuil..." class="input" name="email" type="number">
                        <span class="input-helper text-danger">Ingrese un dato valido</span>

                        <label class="input-label labelPais">Pais</label>
                        <select class="selectPais" name="pais">
                        <option value="" selected disabled>Seleccione un país...</option>
                        <option value="argentina">Argentina</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="brasil">Brasil</option>
                        <option value="canada">Canadá</option>
                        <option value="chile">Chile</option>
                        <option value="colombia">Colombia</option>
                        <option value="costa-rica">Costa Rica</option>
                        <option value="cuba">Cuba</option>
                        <option value="ecuador">Ecuador</option>
                        <option value="el-salvador">El Salvador</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="guatemala">Guatemala</option>
                        <option value="haiti">Haití</option>
                        <option value="honduras">Honduras</option>
                        <option value="mexico">México</option>
                        <option value="nicaragua">Nicaragua</option>
                        <option value="panama">Panamá</option>
                        <option value="paraguay">Paraguay</option>
                        <option value="peru">Perú</option>
                        <option value="uruguay">Uruguay</option>
                        </select>
                        

                        <label class="input-label">Localidad</label>
                        <input placeholder="Ingrese localidad..." class="input" name="email" type="text">
                        <span class="input-helper text-danger">Ingrese un dato valido</span>

                        <label class="input-label">Código postal</label>
                        <input placeholder="Ingrese código postal..." class="input" name="email" type="text">
                        <span class="input-helper text-danger">Ingrese un dato valido</span>
                    </div>
                </div>
                <div class=" d-flex justify-content-end">
                    <button
                        type="button"
                        class="btn btn-primary  btn-sm fw-bold mx-2"
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                    >
                        Cancelar
                    </button>
                    </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img
                class="crearClienteImg"
                src="src/assets/img/undraw_Add_user.png"
                alt=""
                width="100%"
            />
        </div>
        </div>
    </div>
    `;
});

clientes?.addEventListener("click", () => {
	main!.innerHTML = `
    <p>proximamente...</p>
    `;
});
