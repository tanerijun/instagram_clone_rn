import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Separator from "../../home/Separator";

import placeholderImage from "../../../assets/icon.png";

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginRight: 20,
    borderRadius: 5,
  },

  text: {
    color: "#FFF",
  },

  textInput: {
    padding: 5,
  },

  captionTextInput: {
    height: 80,
  },

  parentContainer: {
    marginHorizontal: 10,
  },

  captionWithImageContainer: {
    flexDirection: "row",
    maxHeight: 100,
    marginTop: 10,
    marginBottom: 15,
  },

  captionContainer: {
    flex: 1,
  },

  captionInput: {
    flex: 1,
  },

  urlContainer: {
    marginHorizontal: 5,
  },

  errorContainer: {
    borderColor: "red",
    borderWidth: 1,
  },

  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});

const PostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeholderImage);

  const { handleSubmit, control } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.parentContainer}>
      <View style={styles.captionWithImageContainer}>
        <Image style={styles.image} source={thumbnailUrl} />
        <Controller
          control={control}
          rules={{
            required: "Caption required",
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={styles.captionContainer}>
              <TextInput
                style={[
                  styles.text,
                  styles.textInput,
                  styles.captionTextInput,
                  error ? styles.errorContainer : null,
                ]}
                placeholder="Write a caption"
                placeholderTextColor={"#A9A9A9"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
              {error && (
                <Text style={styles.errorMessage}>{error.message}</Text>
              )}
            </View>
          )}
          name="caption"
        />
      </View>

      <Separator />

      <Controller
        control={control}
        rules={{
          required: "Image URL required",
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              style={[
                styles.text,
                styles.textInput,
                error ? styles.errorContainer : null,
              ]}
              placeholder="Enter image url ..."
              placeholderTextColor={"#A9A9A9"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </View>
        )}
        name="imageUrl"
      />

      <Button title="POST" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default PostUploader;

// TODO: Add form validation