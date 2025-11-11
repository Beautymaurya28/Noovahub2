import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, ShoppingCart, Star } from 'lucide-react-native';
import { useState } from 'react';

const CATEGORIES = ['Food', 'Grooming', 'Toys', 'Accessories'];

const PRODUCTS = [
  {
    id: 1,
    name: 'Pedigree Dog Food',
    price: 499,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Food',
  },
  {
    id: 2,
    name: 'Pet Shampoo',
    price: 299,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Grooming',
  },
  {
    id: 3,
    name: 'Cat Food',
    price: 399,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1931370/pexels-photo-1931370.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Food',
  },
  {
    id: 4,
    name: 'Dog Toy Ball',
    price: 199,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Toys',
  },
  {
    id: 5,
    name: 'Pet Brush',
    price: 249,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/6001579/pexels-photo-6001579.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Grooming',
  },
  {
    id: 6,
    name: 'Dog Collar',
    price: 349,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories',
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = PRODUCTS.filter(p => p.category === selectedCategory);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop</Text>
        <TouchableOpacity style={styles.cartButton}>
          <ShoppingCart size={24} color="#FFF" strokeWidth={2} />
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryContent}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>
                  {product.name}
                </Text>
                <View style={styles.productMeta}>
                  <Text style={styles.productPrice}>₹ {product.price}</Text>
                  <View style={styles.ratingContainer}>
                    <Star size={14} color="#FFD700" fill="#FFD700" />
                    <Text style={styles.ratingText}>{product.rating}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FF9A76',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#3D3D3D',
  },
  categoryContainer: {
    maxHeight: 50,
  },
  categoryContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#FF9A76',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  categoryTextActive: {
    color: '#FFF',
  },
  content: {
    flex: 1,
    paddingTop: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 12,
  },
  productCard: {
    width: '47%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  productImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#F0F0F0',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3D3D3D',
    marginBottom: 8,
    minHeight: 36,
  },
  productMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF9A76',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  addToCartButton: {
    backgroundColor: '#8ED1FC',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFF',
  },
  bottomPadding: {
    height: 20,
  },
});
