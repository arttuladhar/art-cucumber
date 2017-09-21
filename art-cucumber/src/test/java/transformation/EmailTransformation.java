package transformation;

import cucumber.api.Transformer;

public class EmailTransformation extends Transformer<String>{

    @Override
    public String transform(String s) {
        return s + "@ea.com";
    }
}
