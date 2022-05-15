const { getEstado, getEstados, postEstado, putEstado } = require("../../controllers/estado");

describe("Test para controlador estado", () => {
    const mockRequest = (sessionData) => {
        return {
            session: { data: sessionData}
        };
    };

    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };
    
    test("1. Error en la función getEstado", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getEstado(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("2. Error en la función getEstados", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getEstados(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("3. Error en la función postEstado", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await postEstado(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("4. Error en la función putEstado", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await putEstado(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

});