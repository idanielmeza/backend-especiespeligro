const { getHabitad, getHabitads, postHabitad, putHabitad } = require("../../controllers/habitad");

describe("Test para controlador habitad", () => {
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
    
    test("1. Error en la función getHabitad", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getHabitad(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("2. Error en la función getHabitads", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getHabitads(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("3. Error en la función postHabitad", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await postHabitad(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

    test("4. Error en la función putHabitad", async () => {
        const req = mockRequest();
        const res = mockResponse();
        await putHabitad(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ msg: "Hubo un error" });
    });

});