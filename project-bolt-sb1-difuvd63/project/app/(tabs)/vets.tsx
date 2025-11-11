import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Phone, Star, Navigation } from 'lucide-react-native';
import { useState } from 'react';

const VETS = [
  {
    id: 1,
    name: 'Dr. Neha Sharma',
    clinic: 'Happy Paws Clinic',
    distance: '2.3 km',
    rating: 4.8,
    reviews: 120,
    phone: '+91-9876543210',
    address: '123 MG Road, Bangalore',
    isOpen: true,
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    clinic: 'Pet Care Center',
    distance: '3.5 km',
    rating: 4.6,
    reviews: 95,
    phone: '+91-9876543211',
    address: '45 Park Street, Delhi',
    isOpen: true,
  },
  {
    id: 3,
    name: 'Dr. Priya Patel',
    clinic: 'Healthy Pets Clinic',
    distance: '1.8 km',
    rating: 4.9,
    reviews: 150,
    phone: '+91-9876543212',
    address: '78 Marine Drive, Mumbai',
    isOpen: true,
  },
  {
    id: 4,
    name: 'Dr. Amit Singh',
    clinic: 'Veterinary Hospital',
    distance: '5.2 km',
    rating: 4.5,
    reviews: 80,
    phone: '+91-9876543213',
    address: '56 Church Street, Chennai',
    isOpen: false,
  },
];

export default function VetsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleViewMap = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Vets</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, viewMode === 'list' && styles.toggleButtonActive]}
          onPress={() => setViewMode('list')}>
          <Text style={[styles.toggleText, viewMode === 'list' && styles.toggleTextActive]}>
            List View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, viewMode === 'map' && styles.toggleButtonActive]}
          onPress={() => setViewMode('map')}>
          <Text style={[styles.toggleText, viewMode === 'map' && styles.toggleTextActive]}>
            Map View
          </Text>
        </TouchableOpacity>
      </View>

      {viewMode === 'list' ? (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {VETS.map((vet) => (
            <View key={vet.id} style={styles.vetCard}>
              <View style={styles.vetHeader}>
                <View style={styles.vetIcon}>
                  <Text style={styles.vetIconText}>🩺</Text>
                </View>
                <View style={styles.vetInfo}>
                  <Text style={styles.vetName}>{vet.name}</Text>
                  <Text style={styles.clinicName}>{vet.clinic}</Text>
                  <View style={styles.metaRow}>
                    <View style={styles.ratingContainer}>
                      <Star size={14} color="#FFD700" fill="#FFD700" />
                      <Text style={styles.ratingText}>
                        {vet.rating} ({vet.reviews} reviews)
                      </Text>
                    </View>
                    <View style={styles.distanceContainer}>
                      <Navigation size={12} color="#666" />
                      <Text style={styles.distanceText}>{vet.distance}</Text>
                    </View>
                  </View>
                  <View style={styles.statusRow}>
                    <View style={[styles.statusDot, vet.isOpen && styles.statusDotOpen]} />
                    <Text style={[styles.statusText, vet.isOpen && styles.statusTextOpen]}>
                      {vet.isOpen ? 'Open Now' : 'Closed'}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleViewMap(vet.address)}>
                  <MapPin size={18} color="#666" />
                  <Text style={styles.actionButtonText}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.consultButton]}
                  onPress={() => handleCall(vet.phone)}>
                  <Phone size={18} color="#FFF" />
                  <Text style={[styles.actionButtonText, styles.consultButtonText]}>Consult</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={styles.bottomPadding} />
        </ScrollView>
      ) : (
        <View style={styles.mapPlaceholder}>
          <MapPin size={48} color="#8ED1FC" />
          <Text style={styles.mapPlaceholderText}>Map View</Text>
          <Text style={styles.mapPlaceholderSubtext}>
            Google Maps integration would display veterinary clinics in your area
          </Text>
        </View>
      )}
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
    backgroundColor: '#8ED1FC',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  toggleButtonActive: {
    backgroundColor: '#8ED1FC',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  toggleTextActive: {
    color: '#FFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  vetCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  vetHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  vetIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  vetIconText: {
    fontSize: 28,
  },
  vetInfo: {
    flex: 1,
  },
  vetName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3D3D3D',
    marginBottom: 4,
  },
  clinicName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 6,
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
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    fontSize: 12,
    color: '#666',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
  },
  statusDotOpen: {
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },
  statusTextOpen: {
    color: '#4CAF50',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 6,
  },
  consultButton: {
    backgroundColor: '#8ED1FC',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  consultButtonText: {
    color: '#FFF',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  mapPlaceholderText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3D3D3D',
    marginTop: 16,
    marginBottom: 8,
  },
  mapPlaceholderSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomPadding: {
    height: 20,
  },
});
