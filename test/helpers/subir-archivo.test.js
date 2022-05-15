const { subirArchivo } = require("../../helpers/subir-archivo");

describe("Test para subir archivos", () => {
    test("1. Extensión inválida", async () => {
        const file = {
            archivo: {
                name: "si.jpggg",
            },
        };

        await expect(subirArchivo(file, undefined, "images")).rejects.toEqual(
            "Tipo de archivo invalido"
        );
    });
});
