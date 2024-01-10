import StyleDictionary from "style-dictionary";
const customNameTransformer = (token) => {
    if (!token.name.toLowerCase().startsWith(token.original.type.toLowerCase())) {
        token.name = `${token.original.type}${token.name}`;
    }
    else {
        token.name = token.name.charAt(0).toLowerCase() + token.name.slice(1);
    }
    return token.name;
};
const strToNumberTransformer = (token) => {
    try {
        token.value = parseFloat(token.value);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        return token.value;
    }
};
const opacityTransformer = (token) => {
    try {
        token.value = parseFloat(token.value) / 100;
    }
    catch (e) {
        console.log(e);
    }
    finally {
        return token.value;
    }
};
StyleDictionary.registerTransform({
    type: "name",
    name: "name/type",
    transformer: customNameTransformer,
});
StyleDictionary.registerTransform({
    type: "value",
    name: "value/strToInt",
    matcher: (token) => {
        return ((token.type === "borderRadius" || token.type === "borderWidth") &&
            typeof token.value === "string");
    },
    transformer: strToNumberTransformer,
});
StyleDictionary.registerTransform({
    type: "value",
    name: "value/opacity",
    matcher: (token) => {
        return token.type === "opacity" && typeof token.value === "string";
    },
    transformer: opacityTransformer,
});
StyleDictionary.extend("config.json").buildAllPlatforms();
//# sourceMappingURL=generate.js.map