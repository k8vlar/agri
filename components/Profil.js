import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputEx from "./TextInputEx";

const Profil = () => {
  return (
    <ScrollView>
    <View style={styles.profilPage}>
      <TextInputEx></TextInputEx>
      <Text>Profile</Text>
    </View>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium possimus consectetur ipsa. Illo sint cupiditate non iure maxime nihil consequuntur cumque minus repellat ea autem, et tenetur modi eaque.
    Eum iste error nulla impedit quam quisquam reiciendis perspiciatis fugiat, saepe laboriosam iusto ex corrupti ut! Doloribus nostrum veniam a iure, commodi doloremque dolore optio enim debitis asperiores corporis sequi.
    Quasi, hic, impedit quis eveniet praesentium consequuntur laborum non excepturi vero provident quod dolorum iure error. Quae harum unde provident aliquid totam error, impedit similique quod? Natus laudantium voluptas modi.
    Quis, quod dicta eius distinctio velit consequatur quia excepturi quibusdam pariatur veritatis rerum atque fuga asperiores ratione doloribus, repellendus deleniti cupiditate et corrupti sequi. Enim delectus nobis voluptatibus sunt harum.
    Nulla autem esse libero amet perspiciatis voluptatibus! Sed error, quibusdam quo in debitis voluptatem non saepe voluptas? Repellendus quibusdam nihil eligendi sapiente eaque veritatis. Repellendus quas ullam veritatis nihil mollitia!
    Iure officiis facere beatae earum dolores quas in expedita eius, architecto quod, esse omnis voluptatem ex recusandae hic a ipsum aut blanditiis assumenda. Quidem a nam dolore laboriosam assumenda quisquam!
    Obcaecati reprehenderit quisquam repellendus ullam velit animi cumque provident aspernatur numquam totam porro officiis dolores, officia consequuntur a ea cupiditate quos, quod perspiciatis. Harum repudiandae veniam illo quis velit cumque.
    Recusandae deserunt nemo quidem. Aut obcaecati et quis beatae recusandae, adipisci qui, nisi ex libero neque mollitia, porro pariatur quo doloremque asperiores quia iure? Possimus nihil ipsum exercitationem! Mollitia, rem.
    Dolores perferendis rerum inventore odio vel, molestias nesciunt incidunt labore eveniet laboriosam quam, nulla laudantium quaerat a ipsum vero hic, praesentium aperiam delectus cum doloremque ex consectetur molestiae? Cum, ipsam.
    Vitae quasi ab eaque maiores, est architecto officiis dolores earum ipsa doloribus? Dolorem eius voluptate ad maiores illo nostrum? Maiores provident, quia impedit explicabo ipsum rerum sint fuga ut itaque.
    Iusto, ea itaque ab asperiores excepturi debitis iure ratione porro necessitatibus. Eius placeat, perferendis magnam amet quia similique magni fuga quaerat id consequuntur sequi nemo numquam voluptate explicabo, eaque error!
    Fugiat et explicabo ipsa qui adipisci nobis modi repellat, at earum, similique eligendi ex, cum iusto! Labore numquam consequatur minima, ut repellat distinctio nemo voluptatem quibusdam vitae provident! Eligendi, eius!
    Id cupiditate unde consequuntur vitae suscipit alias incidunt tenetur facere officiis corrupti! Eum ullam eligendi ea autem quam non ipsam nemo dicta sed placeat alias, reiciendis ratione numquam, facere tempore.
    Enim delectus, debitis sunt in hic reprehenderit nesciunt autem tempora maiores. Reiciendis iusto error neque nihil, explicabo dolore fugit nulla sit ex cupiditate. Nam vero quam nobis neque voluptas tenetur!
    Consectetur quia vel magnam, sunt ad porro delectus doloremque nam cupiditate consequatur! Sit cumque error deleniti pariatur sapiente voluptas porro amet sed debitis excepturi. Eaque deserunt earum nobis doloremque sed!</Text>
    </ScrollView>
    
  );
};

export default Profil;

const styles = StyleSheet.create({
  profilPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderBlockColor: "green",
    borderWidth: 10,
    width: 150,
  },
});
