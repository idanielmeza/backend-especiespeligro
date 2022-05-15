const { cargarArchivo } = require("../../controllers/uploads");

describe("Test para controlador user", () => {
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
    
    test("1. Error en la función cargarArchivo", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await cargarArchivo(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

});